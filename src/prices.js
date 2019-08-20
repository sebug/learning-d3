import * as d3 from "d3";
import css from './style.css';
import pricesCSV from '../prices.csv';

const parseDate = d3.timeParse('%m/%d/%Y');

function prices() {
    const data = d3.csvParse(pricesCSV, (d) => {
	return {
	    month: parseDate(d.month),
	    price: Number(d.price.trim().slice(1))
	};
    });

    const height = 300;
    const width = 500;

    const max = d3.max(data, d => d.price);
    const minDate = d3.min(data, d => d.month);
    const maxDate = d3.max(data, d => d.month);

    const y = d3.scaleLinear()
	  .domain([0, max])
	  .range([height, 0]);

    const x = d3.scaleTime()
	  .domain([minDate, maxDate])
	  .range([0, width]);

    const yAxis = d3.axisLeft(y);
    const xAxis = d3.axisBottom(x);

    const svg = d3.select('body').append('svg')
	  .attr('height','100%')
	  .attr('width','100%');

    const margin = {
	left: 50,
	right: 50,
	top: 40,
	bottom: 0
    };

    const chartGroup = svg.append('g')
	  .attr('transform', `translate(${margin.left}, ${margin.top})`)

    const line = d3.line()
	  .x(d => x(d.month))
	  .y(d => y(d.price));

    chartGroup.append('path')
	.attr('d', line(data));
    chartGroup.append('g').attr('class', 'x axis')
    	.attr('transform', `translate(0, ${height})`)
	.call(xAxis);

    chartGroup.append('g').attr('class', 'y axis')
	.call(yAxis);
}

export default prices;
