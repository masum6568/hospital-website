import React from 'react';
import { Card, Col } from 'react-bootstrap';


const card = ({ medico }) => {
    const { image, name, subject, degree } = medico
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={image} style={{ width: '80%', padding: '40px', margin: '40px' }} />
                    <Card.Body>

                        <Card.Title>Name: {name}</Card.Title>
                        {/* <p>Description:{description}</p> */}
                        <p>Subject: {subject}</p>
                        <p><small>Degree: {degree}</small></p>

                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default card;