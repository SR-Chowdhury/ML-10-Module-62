import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Shared/RightNav/RightNav';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>
                    <RightNav/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;