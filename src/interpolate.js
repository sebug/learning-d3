import * as d3 from "d3";
import css from './style.css';

function interpolate() {
    const dataArray = [
	{ x: 5, y: 5 },
	{ x: 10, y: 15 },
	{ x: 20, y: 7 },
	{ x: 30, y: 18 },
	{ x: 40, y: 10 }
    ];

    const interpolateTypes = [
	d3.curveLinear,
	d3.curveNatural,
	d3.curveStep,
	d3.curveBasis,
	d3.curveBundle,
	d3.curveCardinal
    ];
    
    const svg = d3.select('body').append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');

    for (let p = 0; p < 6; p += 1) {

	const interpolateType = interpolateTypes[p];
	
	const line = d3.line()
	      .x((d,i) => d.x * 6)
	      .y((d, i) => d.y * 4)
	      .curve(interpolateType);

	const shiftX = p * 250;
	const shiftY = 0;


	const chartGroup = svg.append('g')
	      .attr('class', 'group' + p)
	      .attr('transform',`translate(${shiftX}, 0)`);


	chartGroup.append('path')
	    .attr('fill', 'none')
	    .attr('stroke', 'red')
	    .attr('d', line(dataArray));

	chartGroup.selectAll('circle.grp' + p)
	    .data(dataArray)
	    .enter()
	    .append('circle')
	    .attr('class', 'grp' + p)
	    .attr('r', 2)
	    .attr('cx', (d, i) => d.x * 6)
	    .attr('cy', (d, i) => d.y * 4);
	
    }
}

export default interpolate;

