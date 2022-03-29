import React from 'react';
import { Row, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cards = ({ service }) => {
    const { img, title, sortDescription } = service;

    return (

        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={img} style={{ width: '100%', height: "400px" }} />
                    <Card.Body>

                        <Card.Title>Some Special Book Name: {title}</Card.Title>
                        {/* <p>Description:{description}</p> */}
                        <p>Description: <small>{sortDescription.slice(0, 150)}</small></p>

                        <button className="bg-info rounded-3 text-white " > More Info</button>

                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default Cards;