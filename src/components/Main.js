import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from 'react-bootstrap';

const Main = () => {
    return <Container>
        <h1>Добро пожаловать!</h1>         
        <Link to='/list'>Перейти к поиску</Link>
    </Container>
}

export default Main;