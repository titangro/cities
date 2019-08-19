import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { InputGroup, FormControl, Button, Container, ListGroup } from 'react-bootstrap';

const CitiesList = ({cities, fetchCities, apiRoot, history, error}) => {

    let citiesInput = null;

    const [queryCity, setQueryCity] = useState(() => {
        return history.location.search ? history.location.search.slice(1).split('=')[1] : '';
    });  

    useEffect(() => {
        const url = `${apiRoot}cities/?search=${queryCity}`;
        fetchCities(url);
        history.push(`/list?search=${queryCity}`)
    }, [queryCity]);

    function handleQueryCities() {
        setQueryCity(citiesInput.value);
    }

    return <Container>
        <h1>Поиск городов</h1>
        <InputGroup className="mb-3">
        <FormControl name="cities" ref={node => citiesInput = node}
            placeholder="Название города"
            aria-label="Название города"
            aria-describedby="basic-addon2"
            defaultValue={history.location.search ? decodeURI(history.location.search.slice(1).split('=')[1]) : ''}
        />
        <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => handleQueryCities()}>Получить список</Button>
        </InputGroup.Append>
        </InputGroup>
        {cities.length && !error ?
            <ListGroup>
                <p>Найдено: {cities.length} городов</p>
            {cities.map(
                (city, index) => {
                    const cityId = city._links['city:item'].href.slice(1, -1).split('/').pop().split(':').pop();
                    return (
                        <ListGroup.Item action key={index}>
                            <Link to={`/search/${cityId}`}>
                                {city.matching_full_name}
                            </Link>
                        </ListGroup.Item>  
                    )
                }
            )}</ListGroup>
        : error ? <p>{error}</p> : <p>Пока список городов пуст</p>}
    </Container>
}

CitiesList.propTypes = {
    cities: PropTypes.array.isRequired, 
    fetchCities: PropTypes.func.isRequired, 
    fetchCity: PropTypes.any.isRequired, 
    apiRoot: PropTypes.string.isRequired
}

export default withRouter(CitiesList);