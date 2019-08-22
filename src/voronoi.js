import * as d3 from "d3";
import css from './voronoi.css';

function voronoi() {

    d3.select(window).on('resize', renderInner)

    renderInner();

    function renderInner() {

	const tooltip = d3.select('body').append('div')
	      .style('opacity', '0')
	      .style('position', 'absolute');

	const svgTest = d3.select('body').select('svg');
	if (!svgTest.empty()) {
	    svgTest.remove();
	}
	
	const width = window.innerWidth;
	const height = window.innerHeight;

	const vertices = d3.range(100)
	      .map(d => [Math.random() * width, Math.random() * height]);

	const voronoi = d3.voronoi()
	      .size([width, height]);

	const svg = d3.select('body')
	      .append('svg')
	      .attr('width', '100%')
	      .attr('height', '100%');

	svg.append('g')
	    .attr('class', 'polygon')
	    .selectAll('path')
	    .data(voronoi.polygons(vertices))
	    .enter()
	    .append('path')
	    .attr('d', d => 'M' +
		  d.join('L') + 'Z')
	    .on('mousemove', function (d) {
		tooltip.style('opacity', '1')
		    .style('left', d3.event.pageX + 'px')
		    .style('top', d3.event.pageY + 'px');

		tooltip.html('whatever you like ' + d.length);
	    });

	svg.append('g')
	    .attr('class', 'fuel')
	    .selectAll('circle')
	    .data(vertices)
	    .enter()
	    .append('circle')
	    .attr('cx', d => d[0])
	    .attr('cy', d => d[1])
	    .attr('r', '2.5');
    }
}

export default voronoi;
