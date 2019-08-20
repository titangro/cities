import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as d3 from "d3";

import { Container, ListGroup, Row, Col } from 'react-bootstrap';

const Scores = ({data, cityId, fetchCity, apiRoot}) => {

    let svgDiv;

    useEffect(() => {        
        const canvasHeight = 400;        
        const canvasWidth = '100%';
        const scale = 20;
        const svgCanvas = d3.select(svgDiv)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight)

        svgCanvas.selectAll('rect')
            .data(data.categories).enter()
                .append('rect')
                .attr('width', 45)
                .attr('height', (datapoint) => datapoint.score_out_of_10 * 20)
                .attr('fill', (datapoint) => datapoint.color)
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration)
                .attr('y', (datapoint) => canvasHeight - datapoint.score_out_of_10 * scale);
        
        svgCanvas.selectAll('text')
            .data(data.categories).enter()
                .append('text')
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration)
                .attr('y', (datapoint) => canvasHeight - datapoint.score_out_of_10 * scale - 10)
                .attr('transform', (datapoint, iteration) => `rotate(-90, ${svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration + 5}, ${canvasHeight - datapoint.score_out_of_10 * scale - 30})`)
                .text(datapoint => datapoint.name)
    })
    

    return <Container>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Показатели
            </ListGroup.Item> 
            <ListGroup.Item as="li">
                <div ref={node => svgDiv = node}></div>
            </ListGroup.Item>
            <ListGroup.Item as="li" dangerouslySetInnerHTML={{__html: data.summary}} />
        </ListGroup>
    </Container>
}

export default Scores;