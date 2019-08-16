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
    
}

export default shapes;
