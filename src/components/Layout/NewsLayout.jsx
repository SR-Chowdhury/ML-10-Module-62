import Footer from '../../Pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from '../../Pages/Shared/LeftNav/LeftNav';
import RightNav from '../../Pages/Shared/RightNav/RightNav';
import Header from '../../Pages/Shared/Header/Header';

const NewsLayout = () => {
    return (
        <div>
            <Header />
            <Container>
                <Row>
                    <Col lg={9}>
                        <Outlet />
                    </Col>

                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default NewsLayout;