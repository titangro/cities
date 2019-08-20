import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListGroup, Row, Col } from 'react-bootstrap';

const Details = ({data, cityId, fetchCity, apiRoot}) => { 
    return <Container>        
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Детальная информация
            </ListGroup.Item> 
            <ListGroup.Item as="li">
                {data.categories[0].label}
            </ListGroup.Item>            
        </ListGroup>
    </Container>
}

export default Details;