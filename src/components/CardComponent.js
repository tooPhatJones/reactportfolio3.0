import React from 'react';
import '../css/CardComponent.css';
import Card from 'react-bootstrap/Card'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tooltip from 'react-bootstrap/Tooltip'



function CardComponent(props) {
    return (
        <div className="CardComponent">
            <OverlayTrigger
                placement="bottom"
                overlay={function renderTooltip(vars) {
                    return <Tooltip {...vars}>{props.tooltip}</Tooltip>;
                }}
            >
                <Card bg="light" style={{ width: props.width}}>
                    <Card.Body className='projectCardBody'>
                        <Card.Img variant="top" src={props.image} style={{ height: props.height}} />
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.text}
                        </Card.Text>
                        {props.site ? <a className='projectAnchor' href={props.site} target='none'>Demo</a> : null}
                        {props.git ? <a className='projectAnchor' href={props.git}>Github</a> : null}
                    </Card.Body>
                </Card>
            </OverlayTrigger>
        </div>
    );
}

export default CardComponent;
