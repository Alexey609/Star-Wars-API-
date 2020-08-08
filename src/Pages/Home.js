import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


export default function Home() {
        return (
            <>
            <Container>
                <Row>
                    <Col md="12">
                    <Image className="m-5" src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" fluid />
                    </Col>
                </Row>
            </Container>
            </>
        );

}