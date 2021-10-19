import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Banner1 from '../../Banner.jpg'

const NotFound = () => {
    return (
        <div>
            <img src={Banner1} style={{ width: '100%' }} alt="" />


            <Link to="/home"> <Button>Go Back</Button></Link>

        </div >
    );
};

export default NotFound;