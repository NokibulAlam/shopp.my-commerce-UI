import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap';

// Import Images
import Hero1 from '../../images/Hero/Banner-01.jpg';
import Hero2 from '../../images/Hero/Banner-02.jpg';
import Hero3 from '../../images/Hero/Banner-03.jpg';

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
                    <Col data-aos="fade-up" data-aos-duration="1500">
                        <Carousel>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero1}
                                    alt="First slide"
                                   style={{ height: "auto" }}
                                />
                                <Carousel.Caption>
                                    {/* <h3 className='layoutH2 text-center'>{title}</h3>
                                    <p className='descriptionP'>{description}.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero2}
                                    alt="Second slide"
                                   style={{ height: "auto" }}
                                />

                                <Carousel.Caption>
                                    {/* <h3 className='layoutH2 text-center'>{title}</h3>
                                    <p>{description}.</p> */}
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    className="d-block w-100"
                                    src={Hero3}
                                    alt="Third slide"
                                   style={{ height: "auto" }}
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