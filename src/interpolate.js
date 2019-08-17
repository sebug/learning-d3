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
    const svg = d3.select('body').append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');

    const line = d3.line()
	  .x((d,i) => d.x * 6)
	  .y((d, i) => d.y * 4)
	  .curve(d3.curveCardinal);

    svg.append('path')
	.attr('fill', 'none')
	.attr('stroke', 'red')
	.attr('d', line(dataArray));
    
}

export default interpolate;

