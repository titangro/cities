import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListGroup } from 'react-bootstrap';

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
            <ListGroup.Item as="li">
                Координаты: {city.location.latlon.latitude} {city.location.latlon.longitude}
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Morbi leo risus
            </ListGroup.Item>
            <ListGroup.Item as="li">
                Население: {city.population.toLocaleString('ru-RU')} человек
            </ListGroup.Item>
            <ListGroup.Item as="li">
                {city.salaries || city.scores || city.details ? 'Есть подробные данные'
                    : 'Подробные данные отсутсвуют'
                }
            </ListGroup.Item>
        </ListGroup>
    </Container> : ''
}

export default City;