import * as d3 from "d3";
import css from './style.css';

function shapes() {
    const dataArray = [5,11,18];

    const svg = d3.select('body').append('svg')
	.attr('height','100%')
	  .attr('width','100%');

    svg.selectAll('rect')
	.data(dataArray)
	.enter()
	.append('rect')
	.attr('height', (d, i) => d * 15)
	.attr('width','50')
	.attr('fill', 'pink')
	.attr('x',
	      (d,i) => i * 60)
	.attr('y', (d, i) => 300 - d * 15);


    let newX = 300;
    svg.selectAll('circle.first')
	.data(dataArray)
	.enter()
	.append('circle')
	.attr('class','first')
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

    svg.append('text')
	.attr('x', newX)
	.attr('y', 150)
	.attr('fill', 'none')
	.attr('stroke','blue')
	.attr('stroke-width', '2')
	.attr('text-anchor', 'start')
	.attr('font-size', '30')
	.text('start');
    svg.append('text')
	.attr('x', newX)
	.attr('y', 180)
	.attr('fill','blue')
	.attr('stroke', 'none')
	.attr('text-anchor', 'middle')
	.attr('font-size', '30')
	.text('middle');
    svg.append('text')
	.attr('x', newX)
	.attr('y', 210)
	.attr('stroke','blue')
	.attr('fill', 'none')
	.attr('text-anchor', 'end')
	.attr('font-size', '30')
	.text('end');
    
}

export default shapes;
