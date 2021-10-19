import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { handleRegistration, handleEmailChange, handlePasswordChange, error, user, logOut, password } = useAuth()
    return (
        <div className="mx-5 mt-3 pt-4">
            <Form onSubmit={handleRegistration}>
                <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail" onChange={handleEmailChange} >
                    <Form.Label column sm={2} >
                        Email
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="email" placeholder="Email" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword" onBlur={handlePasswordChange} >
                    <Form.Label column sm={2} >
                        Password
                    </Form.Label>
                    <Col sm={6}>
                        <Form.Control type="password" placeholder="Password" required />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Form.Check label="Remember me" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <div className="row mb-3 text-danger">{error}</div>
                        {user.password ? <Button type="submit">Sign Out</Button> :
                            <Button type="submit">Sign in</Button>}
                    </Col>
                </Form.Group>
            </Form>
        </div>
    );
};

export default Register;
