
import { faClinicMedical, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';



const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, user, logOut, password } = useAuth()
    return (
        <div>
            <h2 className="text-primary"><b> Please Register !! </b> Our National Infirmary </h2>
            <FontAwesomeIcon className="icon mt-3" icon={faStethoscope} size='2x' />


            <div className="mx-5 mt-4 pt-4 ">
                <Form onSubmit={handleRegistration}>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" onChange={handleEmailChange} >
                        <Form.Label column sm={2} >
                            Email:
                        </Form.Label>
                        <Col sm={6}>
                            <Form.Control type="email" placeholder="Email" required />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onBlur={handlePasswordChange} >
                        <Form.Label column sm={2} >
                            Password:
                        </Form.Label>
                        <Col sm={6} >
                            <Form.Control type="password" placeholder="Password" required />

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onBlur={handlePasswordChange} >
                        <Form.Label column sm={2} >
                            Re-Password :
                        </Form.Label>
                        <Col sm={6} >
                            <Form.Control type="password" placeholder="Retype-Password" required />

                        </Col>
                    </Form.Group>



                    <Form.Group as={Row} className="mb-3">
                        <Col sm={{ span: 10, offset: 2 }}>
                            <div className="row mb-3 text-danger">{error}</div>
                            {user.email ? <Button type="submit" className="bg-dark">log Out</Button> :
                                <Button type="submit" className="bg-dark">Register</Button>}
                        </Col>
                    </Form.Group>
                </Form>
            </div >
            <br />
            <p>People won't buy insurance until they're sick. If you can call on your way to the hospital and get coverage, it's not really insurance at that point.</p>
            <br />
            <FontAwesomeIcon className="icon" icon={faClinicMedical} size='3x' />
        </div>
    );
};

export default Register;
