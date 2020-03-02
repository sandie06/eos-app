import React from 'react';
import './BlockDetail.css';

export const RawData = props => <div>{JSON.stringify(props.data)}</div>;

export class BlockDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shouldDisplay: false
        }
    }

    handleClick() {
        this.setState({
            shouldDisplay: !this.state.shouldDisplay
        });
    }

    getBlockHash() {
        return this.props.data.id;
    }

    getBlockTimestamp() {
        return this.props.data.timestamp;
    }

    getActionCount() {
        return this.props.data.transactions.map(tran => {
            try {
                return tran.trx.transaction.actions.length;
            } catch (e) {
                return 0;
            }
        }).reduce((sum, actionCount) => sum += actionCount, 0);
    }

    render() {
        return (
            <div className="title">
                <span className="hash">{this.getBlockHash(this.props.data)}</span>
                <span className="timestamp">{this.getBlockTimestamp(this.props.data)}</span>
                <span className="count">{this.getActionCount(this.props.data)}</span>
            </div>
        );
    }
}