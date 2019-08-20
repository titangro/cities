import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListGroup, Row, Col } from 'react-bootstrap';

import Salaries from './Salaries';
import Scores from './Scores';
import Details from './Details';

const City = ({city, cityId, fetchCity, apiRoot}) => {
    useEffect(() => {
        const url = `${apiRoot}cities/geonameid:${cityId}`;
        fetchCity(url);
    }, [cityId]);

    return city ? <Container>
        <h1>{city.name}</h1>
        <ListGroup as="ul">
            <ListGroup.Item as="li">
                Местонахождение: {city.full_name}
            </ListGroup.Item>
            <ListGroup.Item as="li" active>
                Координаты: {city.location.latlon.latitude} {city.location.latlon.longitude}
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li" active>
                Население: {city.population.toLocaleString('ru-RU')} человек
            </ListGroup.Item>
            <ListGroup.Item as="li">
                {city.salaries || city.scores || city.details ? 
                    <React.Fragment>
                        <Container>
                            Есть подробные данные
                        </Container>
                        <Row>
                            <Col>
                                <Salaries data={city.salaries} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Scores data={city.scores} />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Details data={city.details} />
                            </Col>
                        </Row>
                    </React.Fragment>
                    : 'Подробные данные отсутсвуют'
                }
            </ListGroup.Item>
        </ListGroup>
    </Container> : ''
}

export default City;