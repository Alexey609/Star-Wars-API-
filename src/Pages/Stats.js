import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';


export default function Stats({ data }) {
        return (
            <>
            <Container>
                <h2>Статистика</h2>
                <p>Фильмы: {data.filmsCount}</p>
                <p>Планеты: {data.planetsCount}</p>
                <p>Персонажи: {data.peopleCount}</p>
                <p>Биологиские виды: {data.speciesCount}</p>
               <p>Транспорт: {data.vehiclesCount}</p>
               <p>Корабли: {data.starshipsCount}</p>
                <Row>
                    <Col md="12">
                    <Image className="m-5" src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2015/11/news-article-images-gah-hero-watermarked.jpg" fluid />
                    </Col>
                </Row>
            </Container>
            </>
        );

}