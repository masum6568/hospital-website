import React from 'react';
import { Card, Col } from 'react-bootstrap';


const card = ({ medico }) => {
    const { Image, Name, Subject, Degree, JoiningDay } = medico
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img variant="top" src={Image} style={{ width: '80%', padding: '40px', margin: '40px' }} />
                    <Card.Body>

                        <Card.Title>Name: {Name}</Card.Title>
                        {/* <p>Description:{description}</p> */}
                        <p>Subject: {Subject}</p>
                        <p><small>Degree: {Degree}</small></p>
                        <p><small>Joining Day: {JoiningDay}</small>
                        </p>
                    </Card.Body>
                </Card>
            </Col>
        </div>

    );
};

export default card;