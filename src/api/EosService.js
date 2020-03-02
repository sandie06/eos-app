import { Api, JsonRpc, RpcError } from 'eosjs';

// Get URL for URL below and Choose the one with CORS support
// https://www.eosdocs.io/resources/apiendpoints/
const EOC_API_ENDPOINT = 'https://user-api.eoseoul.io:443';
const rpc = new JsonRpc(EOC_API_ENDPOINT, { fetch });
const DEFAULT_BLOCK_NUM = 10;

export class EosService {

    async getInfo() {
        return await rpc.get_info();
    }

    async getBlock(blockId) {
        console.log(blockId);
        return await rpc.get_block(blockId);
    }

    async getMostRecentBlocks(number = DEFAULT_BLOCK_NUM) {
        const info = await this.getInfo();
        let blockNum = info.last_irreversible_block_num;
        const index = Array(number).fill(1).map((_, index) => index);
        console.log(index);
        const blockPromises = index.map(i => this.getBlock(blockNum - i));
        const allBlockInfos = await Promise.all(blockPromises);
        console.log(allBlockInfos);
        return  allBlockInfos;
    }
}

