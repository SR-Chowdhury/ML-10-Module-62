import React from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    return (
        <Container>

            <Form className='formContainer'>
                <h1 className='titleForm'>Login your Account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" id="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" id="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <button className='formBtn' type="submit">Login</button>
                </div>
                <p className='text-muted text-center mt-3'>Dont’t Have An Account ? <Link to="/register">Register</Link></p>
            </Form>
        </Container>
    );
};

export default Login;