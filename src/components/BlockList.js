import React from 'react';
import { BlockDetail , RawData} from './BlockDetail';
import { Accordion, Card } from 'react-bootstrap';

export const BlockLis = props => {
    const list = (props.blocks || []).map((blockData, index) => (
        <Card key={index}>
            <Accordion.Toggle as={Card.Header} eventKey={index}>
                <BlockDetail data={blockData} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey={index}>
                <RawData data={blockData} />
            </Accordion.Collapse>
        </Card>
    ));
    return (
        <Accordion defaultActiveKey="0">
            {list}
        </Accordion>
    );
}