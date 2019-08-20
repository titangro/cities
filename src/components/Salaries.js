import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

import { Container, ListGroup, Tabs, Tab } from 'react-bootstrap';

const Salaries = ({data}) => {

    let svgDiv;

    const [percent, setPercent] = useState('percentile_25');

    useEffect(() => {
        d3.select(svgDiv).selectAll('*').remove();

        const canvasHeight = 400;        
        const canvasWidth = '100%';
        const scale = 20;
        const svgCanvas = d3.select(svgDiv)
            .append('svg')
            .attr('width', canvasWidth)
            .attr('height', canvasHeight);

        /*svgCanvas.selectAll('rect')
            .data(data.categories).enter()
                .append('rect')                
                .attr('width', 45)
                .attr('height', (datapoint) => datapoint.score_out_of_10 * 20)
                .attr('fill', (datapoint) => datapoint.color)
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration)
                .attr('y', canvasHeight)
                .transition()
                .duration(800)
                .attr('y', (datapoint) => canvasHeight - datapoint.score_out_of_10 * scale);
        
        svgCanvas.selectAll('text')
            .data(data.categories).enter()
                .append('text')
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration - 10)
                .attr('y', (datapoint) => canvasHeight - datapoint.score_out_of_10 * scale - 10) 
                .attr('transform', (datapoint, iteration) => `rotate(-90, ${svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration + 5}, ${canvasHeight - datapoint.score_out_of_10 * scale - 30})`)
                .transition()
                .duration(800)
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration)             
                .text(datapoint => datapoint.name);
        svgCanvas.selectAll(".scores")
            .data(data.categories).enter()
                .append("text")
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration - 10)
                .attr('y', (datapoint) => canvasHeight -  10)
                .attr('fill', '#ffffff')           
                .transition()
                .duration(800)
                .attr('x', (datapoint, iteration) => svgCanvas.node().getBoundingClientRect().width/data.categories.length * iteration + 10)             
                .text(datapoint => datapoint.score_out_of_10.toFixed(1));*/
    }, [data])

    return <Container>
        <ListGroup as="ul">
            <ListGroup.Item as="li" active>
                Процент зарплат населения
            </ListGroup.Item> 
            <ListGroup.Item as="li">
                <Tabs id="salary_percentiles" activeKey={percent} onSelect={p => setPercent(p)}>
                    <Tab eventKey="percentile_25" title="25%">
                        {data.salaries[0].job.title}
                        {data.salaries[0].salary_percentiles[percent]}
                    </Tab>
                    <Tab eventKey="percentile_50" title="50%">
                        {data.salaries[0].job.title}
                        {data.salaries[0].salary_percentiles[percent]}
                    </Tab>
                    <Tab eventKey="percentile_75" title="75%">
                        {data.salaries[0].job.title}
                        {data.salaries[0].salary_percentiles[percent]}
                    </Tab>
                </Tabs>
                <div ref={node => svgDiv = node}></div>
            </ListGroup.Item>            
        </ListGroup>
    </Container>
}

export default Salaries;