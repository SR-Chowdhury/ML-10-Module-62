import React, { useContext, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Register = () => {

    const { user, createUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {

        setError('');
        setSuccess('');

        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if (password !== confirmPassword) setError('Password Did not matched!');
        else if (password.length < 6) setError('Password length should be six characters!')

        createUser(email, password)
            .then(reult => {
                const loggedInUser = reult.user;
                setError('');
                navigate('/category/0');
                setSuccess('Successfully Created User!');
                form.reset();
            })
            .catch(err => setError(err.message))
    }

    return (
        <Container>

            <Form className='formContainer' onSubmit={handleSubmit}>
                <h1 className='titleForm'>Register Account</h1>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name="name" required placeholder="Enter Your Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" required placeholder="*******" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="confirmPassword" required placeholder="*******" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms & Conditions" />
                </Form.Group>
                <div>
                    <button className='formBtn' type="submit">Register</button>
                </div>
                <p className='text-muted text-center mt-3'>Already Have An Account ? <Link to="/login">Login</Link></p>
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

export default Register;