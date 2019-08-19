import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

const City = ({city, cityId, fetchCity, apiRoot}) => {
    useEffect(() => {
        const url = `${apiRoot}cities/geonameid:${cityId}`;
        fetchCity(url);
    }, [cityId]);

    return city ? <Container>
        <h1>{city.name}</h1>        
        <p>Местонахождение: {city.full_name}</p>
        <p>Координаты: {city.location.latlon.latitude} {city.location.latlon.longitude}</p>
        <p>Население: {city.population.toLocaleString('ru-RU')} человек</p>
        {city.salaries || city.scores || city.details ? <p>Есть подробные данные</p>
            : <p>Подробные данные отсутсвуют</p>
        }
    </Container> : ''
}

export default City;