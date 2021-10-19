import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cards = ({ service }) => {
    const { id, img, title, sortDescription } = service;

    return (

        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{ width: '100%' }} />
                    <Card.Body>

                        <Card.Title>Name: {title}</Card.Title>
                        {/* <p>Description:{description}</p> */}
                        <p>Volume: <small>{sortDescription.slice(0, 150)}</small></p>
                        <Link to={`/service/${service?.id}`}>
                            <button className="bg-primary rounded-3 text-white " > Details</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Cards;