import React, { useContext, useState } from 'react';
import './Login.css';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {

    const { user, signInUser } = useContext(AuthContext);

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {

        setError('');
        setSuccess('');

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(reult => {
                const loggedInUser = reult.user;
                setError('');
                setSuccess('Successfully Logged in!');
                form.reset();
            })
            .catch(err => setError(err.message))
    }

    return (
        <Container>

            <Form onSubmit={handleSubmit} className='formContainer'>
                <h1 className='titleForm'>Login your Account</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>
                <div>
                    <button className='formBtn' type="submit">Login</button>
                </div>
                <p className='text-muted text-center mt-3'>Dont’t Have An Account ? <Link to="/register">Register</Link></p>
                {
                    error && <p className="text-danger text-center">{error}</p>
                }
                {
                    success && <p className="text-success text-center">{success}</p>
                }
            </Form>
        </Container>
    );
};

export default Login;