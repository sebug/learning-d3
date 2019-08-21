import * as d3 from "d3";
import css from './style.css';
import theXML from '../data2.xml';

function stackOuter() {
    const parseDate = d3.timeParse('%Y');

    const height = 200;
    const width = 500;
    const margin = {
	left: 50,
	right: 50,
	top: 40,
	bottom: 0
    };
    
    const domParser = new DOMParser();
    const parsedXml = domParser.parseFromString(theXML, 'text/xml');

    const dataXml = Array.from(parsedXml.querySelectorAll('dat'))
	  .map(d => {
	      return {
		  date: parseDate(d.getAttribute('id')),
		  top: Number(d.querySelector('top').textContent),
		  middle: Number(d.querySelector('middle').textContent),
		  bottom: Number(d.querySelector('bottom').textContent)
	      };
	  });

    const x = d3.scaleTime()
	  .domain(d3.extent(dataXml, d => d.date))
	  .range([0, width]);

    const y = d3.scaleLinear()
	  .domain([0, d3.max(dataXml, d =>
			     d.top + d.middle + d.bottom)])
	  .range([height, 0]);

    const categories = ['top', 'middle', 'bottom'];

    const stack = d3.stack().keys(categories);

    const area = d3.area()
	  .x((d, i) => x(dataXml[i].date))
	  .y0(d => y(d[0]))
	  .y1(d => y(d[1]));

    const svg = d3.select('body')
	  .append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');

    const chartGroup = svg.append('g')
	  .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const stacked = stack(dataXml);

    chartGroup.append('g').attr('class', 'x axis')
	.attr('transform', `translate(0, ${height})`)
	.call(d3.axisBottom(x));

    chartGroup.append('g').attr('class', 'y axis')
	.call(d3.axisLeft(y).ticks(5));

    // chartGroup.selectAll('path.area')
    // 	.data(stacked)
    // 	.enter()
    // 	.append('path')
    // 	.attr('class','area')
    // 	.attr('d', d => area(d));

    chartGroup.selectAll('g.area')
	.data(stacked)
	.enter()
	.append('g')
	.attr('class', 'area')
	.append('path')
	.attr('class', 'area')
	.attr('d', d => area(d));

}

export default stackOuter;
