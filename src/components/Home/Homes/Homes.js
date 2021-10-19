import React, { useEffect, useState } from 'react';
import { Button, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Cards from '../../card/Cards';
import './Homes.css'

const Homes = () => {
    const [temple, setTemple] = useState([])
    useEffect(() => {
        fetch('/service.json')
            .then(res => res.json())
            .then(data => setTemple(data.slice(0, 6)))
    }, [])
    return (
        <div className="container">


            <Row xs={1} md={3}
                className="g-4 mt-4 mb-4">
                {
                    temple.map(service => <Cards
                        service={service}
                    ></Cards>)
                }
            </Row>
            <div className="btn">
                <Link to="/services"> <Button>More Service</Button></Link>
            </div>
        </div>

    );
};

export default Homes;