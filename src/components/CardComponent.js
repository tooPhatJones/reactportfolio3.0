import React from 'react';
import '../css/CardComponent.css';
import Card from 'react-bootstrap/Card'



function CardComponent(props) {
    console.log('test')
    return (
        <div className="CardComponent">
            <Card  bg="white" style={{ width: props.width }}>
                
                <Card.Body className='projectCardBody'>
                <Card.Img variant="top" src={props.image} />
                <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                       {props.text}
                    </Card.Text>
                   {props.site ? <a className='projectAnchor' href={props.site} target='none'>Demo</a>: null} 
                   {props.git ?  <a className='projectAnchor' href={props.git}>Github</a>: null}
                   
                </Card.Body>
            </Card>
        </div>
    );
}

export default CardComponent;
