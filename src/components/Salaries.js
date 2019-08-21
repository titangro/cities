import React, { useState, useEffect } from 'react';
import * as d3 from "d3";

import { Container, ListGroup, Tabs, Tab } from 'react-bootstrap';

const Salaries = ({data}) => {

    let svgDiv;
    
    console.log(d3)

    const [percent, setPercent] = useState('percentile_25');

    useEffect(() => {
        d3.select(svgDiv).selectAll('*').remove();

        const canvasHeight = 400;        
        const canvasWidth = '100%';
        const scale = 20;
        const color = d3.scaleLinear().domain([1,10]).range(["white", "blue"])
        const margin = 30;

        const svgCanvas = d3.select(svgDiv)
            .attr("class", "axis")
            .append('svg')
            .attr("viewBox", [0, 0, canvasWidth, canvasWidth])
            .style("font", "10px sans-serif");

        const g = svgCanvas.append("g")
            .attr("transform", `translate(${canvasWidth / 2},${canvasWidth / 2})`);

        const radius = Math.min(svgCanvas.node().getBoundingClientRect().width - 2 * margin, canvasHeight- 2*margin) / 2;

        const arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius / 2)

        const pie = d3.pie()
            .sort(null)
            .value(d => d.salary_percentiles[percent])

        svgCanvas.selectAll('arc')
            .data(pie(data.salaries)).enter()
                .append("g")
                .append('path')
                .attr('class', 'arc')
                .attr('d', arc)
                .style('fill', d => color(d.data.job.title))
                .append('text')
                .attr('transform', d => `translate(${arc.centroid(d)})`)
                .style('text-anchor', 'middle')
                .text(d => d.data.job.title)         
        
        /*g.append('path')
            .attr('d', arc)
            .style('fill', d => color(d.job.title))

        g.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .style('text-anchor', 'middle')
            .text(d => d.job.title)*/

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


        /*d3.select(svgDiv).selectAll('*').remove();

        const canvasHeight = 400;        
        const canvasWidth = '100%';
        const scale = 20;
        const color = d3.scaleOrdinal(d3.quantize(d3.interpolateRainbow, data.children.length + 1));
        const margin = 30;

        const radius = Math.min(canvasHeight - 2 * margin, canvasHeight- 2 * margin) / 2;

        const arc = d3.arc()
            .startAngle(d => d.x0)
            .endAngle(d => d.x1)
            .padAngle(d => Math.min((d.x1 - d.x0) / 2, 0.005))
            .padRadius(radius * 1.5)
            .innerRadius(d => d.y0 * radius)
            .outerRadius(d => Math.max(d.y0 * radius, d.y1 * radius - 1))

        const svgCanvas = d3.select(svgDiv)
            .attr("class", "axis")
            .append('svg')
            .attr("viewBox", [0, 0, canvasHeight, canvasHeight])
            .style("font", "10px sans-serif");

        const g = svgCanvas.append("g")
            .attr("transform", `translate(${canvasHeight / 2},${canvasHeight / 2})`);

        const path = g.append("g")
            .selectAll("path")
                .data(data.salaries)
                .join("path")
                    .attr("fill", d => { while (d.depth > 1) d = d.parent; return color(d.job.title.job.title); })
                    .attr("fill-opacity", d => arcVisible(d) ? (d.children ? 0.6 : 0.4) : 0)
                    .attr("d", d => arc(d));

        const arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius / 2)

        const pie = d3.pie()
            .sort(null)
            .value(d => d.salary_percentiles[percent])

        /*svgCanvas.selectAll('arc')
            .data(pie(data.salaries)).enter()
                .append("g")
                .append('path')
                .attr('class', 'arc')
                .attr('d', arc)
                .style('fill', d => color(d.data.job.title))
                .append('text')
                .attr('transform', d => `translate(${arc.centroid(d)})`)
                .style('text-anchor', 'middle')
                .text(d => d.data.job.title)    */     
        
        /*g.append('path')
            .attr('d', arc)
            .style('fill', d => color(d.job.title))

        g.append('text')
            .attr('transform', d => `translate(${arc.centroid(d)})`)
            .style('text-anchor', 'middle')
            .text(d => d.job.title)*/

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