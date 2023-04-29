import React from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <Container>

            <Form className='formContainer'>
                <h1 className='titleForm'>Register Account</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="*******" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" placeholder="*******" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>
                <div>
                    <button className='formBtn' type="submit">Register</button>
                </div>
                <p className='text-muted text-center mt-3'>Already Have An Account ? <Link to="/login">Login</Link></p>
            </Form>
        </Container>
    );
};

export default Register;