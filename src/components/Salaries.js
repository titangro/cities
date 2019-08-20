import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Container, ListGroup, Row, Col } from 'react-bootstrap';

const Salaries = ({data, cityId, fetchCity, apiRoot}) => { 
    return <Container>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Процент зарплат населения
            </ListGroup.Item> 
            <ListGroup.Item as="li">
                {data.salaries[0].job.title}
            </ListGroup.Item>            
        </ListGroup>
    </Container>
}

export default Salaries;