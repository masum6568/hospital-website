import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Card from '../../card/Card';

const About = () => {
    const [doctor, setDoctor] = useState([]);
    useEffect(() => {
        fetch('/doctor.json')
            .then(res => res.json())
            .then(data => setDoctor(data))
    }, [])
    return (
        <div className="container">
            <Row xs={1} md={3}
                className="g-4 mt-4 mb-4">
                {
                    doctor.map(medico => <Card
                        medico={medico}
                    ></Card>)
                }
            </Row>
        </div>
    );
};

export default About;