import React from 'react';
import { Card, Grid } from 'semantic-ui-react';
import { Container, Row, Col, Image } from 'react-bootstrap';

export default function Films({data}) {
        return (
            <>
            <h2>Фильмы</h2>
            <Grid columns={3}>
                {data.map((films, i) => {
                    return (
                        <Grid.Column  key={i}>
                         <Card>
                          <Card.Content>
                           <Card.Header> {films.title}</Card.Header>
                           <Card.Description>
                           <p>{films.director}</p>
                           <p>{films.producer}</p>
                           <p>{films.release_date}</p>
                          </Card.Description>   
                          </Card.Content>
                         </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
            <Container>
                <Row>
                    <Col md="12">
                    <Image className="m-5" src="https://media.contentapi.ea.com/content/dam/eacom/en-us/migrated-images/2015/11/news-article-images-gah-hero-watermarked.jpg" fluid />
                    </Col>
                </Row>
            </Container>
            </>
        );

}