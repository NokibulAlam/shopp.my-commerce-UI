import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// import CSS
import './Layout.css';
import '../../style.css';

// NavBar Import
import Menu from '../Menu/Menu';


const Layout = ({
    title = "Title",
    description = "This is Description",
    children,
    classname
}) => {
    return (
        <div>
            <Container fluid>
                <Menu />
                <Row>
                    <Col lg={12} md={12} sm={12} data-aos="fade-up" data-aos-duration="1500">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/Banner-01.jpg"
                                    alt="First slide"
                                    height="700px"
                                />
                                <Carousel.Caption>
                                    {/* <h3 className='layoutH2 text-center'>{title}</h3>
                                    <p className='descriptionP'>{description}.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/Banner-02.jpg"
                                    alt="Second slide"
                                    height="700px"
                                />

                                <Carousel.Caption>
                                    {/* <h3 className='layoutH2 text-center'>{title}</h3>
                                    <p>{description}.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src="/images/Banner-03.jpg"
                                    alt="Third slide"
                                    height="700px"
                                />

                                <Carousel.Caption>
                                    {/* <h3 className='layoutH2 text-center'>{title}</h3>
                                    <p>{description}.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
            <div className={classname}>
                {children}
            </div>
        </div>
    )
}

export default Layout;