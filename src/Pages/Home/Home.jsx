import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import RightNav from '../Shared/RightNav/RightNav';
import LeftNav from '../Shared/LeftNav/LeftNav';

const Home = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <LeftNav/>
                </Col>

                <Col>2 of 3</Col>
                
                <Col>
                    <RightNav/>
                </Col>
            </Row>
        </Container>
    );
};

export default Home;