import * as d3 from "d3";
import css from './style.css';

function shapes() {
    const dataArray = [5,11,18];

    const dataDays = ['Mon', 'Wed', 'Fri'];

    const rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);
    const rainbow2 = d3.scaleSequential(d3.interpolateRainbow).domain([0, 3]);

    const x = d3.scaleOrdinal()
	  .domain(dataDays)
	  .range([25, 85, 145]);

    const xAxis = d3.axisBottom(x);

    const svg = d3.select('body').append('svg')
	.attr('height','100%')
	  .attr('width','100%');


    const cat10 = d3.schemeCategory10;

    svg.selectAll('rect')
	.data(dataArray)
	.enter()
	.append('rect')
	.attr('height', (d, i) => d * 15)
	.attr('width','50')
	.attr('fill', (d, i) => rainbow(i))
	.attr('x',
	      (d,i) => i * 60)
	.attr('y', (d, i) => 300 - d * 15);

    svg.append('g')
	.attr('class', 'x axis hidden')
	.attr('transform', `translate(0, 300)`)
	.call(xAxis);


    let newX = 300;
    svg.selectAll('circle.first')
	.data(dataArray)
	.enter()
	.append('circle')
	.attr('class','first')
	.attr('fill', (d, i) => rainbow2(i))
	.attr('cx', (d, i) => {
	    newX += d * 3 + 50;
	    return newX;
	})
	.attr('cy','100')
	.attr('r', (d, i) => d * 3);


    newX = 600;
    svg.selectAll('ellipse')
	.data(dataArray)
	.enter()
	.append('ellipse')
	.attr('fill', (d, i) => cat10[i])
	.attr('cx', (d, i) => {
	    newX += d * 3 + 50;
	    return newX;
	})
	.attr('cy','100')
	.attr('rx', (d, i) => d * 3)
	.attr('ry', '30');


    newX = 1000;
    svg.selectAll('line')
	.data(dataArray)
	.enter()
	.append('line')
	// .style('stroke', 'green')
	// .attr('stroke', 'blue')
	.attr('stroke-width', '2')
	.attr('x1', (d, i) => {
	    return newX;
	})
	.attr('y1', (d, i) => 80 + i * 20)
	.attr('x2', (d, i) => newX + (d * 15))
	.attr('y2', (d, i) => 80 + i * 20);


    const textArray = ['start', 'middle', 'end'];
    svg.append('text').selectAll('tspan')
	.data(textArray)
	.enter()
	.append('text')
    	.attr('x', newX)
	.attr('y', (d, i) => 150 + i * 30)
	.attr('fill', 'none')
	.attr('stroke','blue')
	.attr('stroke-width', '2')
	.attr('text-anchor', (d, i) => d)
	.attr('dominant-baseline', 'middle')
	.attr('font-size', '30')
	.text((d, i) => d);

    svg.append('line')
	.attr('x1', newX)
	.attr('y1', 150)
	.attr('x2', newX)
	.attr('y2', 210);
    
}

export default shapes;
