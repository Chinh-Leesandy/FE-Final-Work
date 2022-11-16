import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

export default function Home() {
    return (
        <React.Fragment>
            <Header></Header>
            <Carousel>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 img-home"
                        src="https://www.leoasher.dev/static/media/banner1.237a7309.png"
                        alt="Image One"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="d-block w-100 img-home"
                        src="https://www.leoasher.dev/static/media/banner2.caec085c.png"
                        alt="Image Two"
                    />
                </Carousel.Item>
            </Carousel>
            <Footer></Footer>
        </React.Fragment>
    );
}