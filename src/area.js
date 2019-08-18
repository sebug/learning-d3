import * as d3 from "d3";
import css from './style.css';

function areaOuter() {
    let randomData = [];
    for (let i = 0; i < 17; i += 1) {
	const randomValue = Math.round(Math.random() * 200);
	randomData.push(randomValue);
    }
    let years = [];
    for (let i = 0; i < 17; i += 1) {
	years.push((2000 + i).toString());
    }

    const parseDate = d3.timeParse('%Y');
    
    const height = 200;
    const width = 500;

    const margin = {
	left: 50,
	right: 50,
	top: 40,
	bottom: 0
    };

    const y = d3.scaleLinear()
	  .domain([0, d3.max(randomData)])
	  .range([height, 0]);

    const x = d3.scaleTime()
	  .domain(d3.extent(years, parseDate))
	  .range([0, width]);

    const yAxis = d3.axisLeft(y)
	  .ticks(3)
	  .tickPadding(10)
	  .tickSize(10);

    const xAxis = d3.axisBottom(x);

    const area = d3.area()
	  .x((d, i) => x(parseDate(years[i])))
	  .y0(height)
	  .y1(y);

    const svg = d3.select('body').append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');

    const chartGroup = svg.append('g').attr('class','chartgroup')
    	  .attr('transform', `translate(${margin.left}, ${margin.top})`);

    chartGroup.append('path').attr('d', area(randomData));

    chartGroup.append('g').attr('class','axis y')
	.call(yAxis);

    chartGroup.append('g').attr('class', 'axis x')
	.attr('transform', `translate(0, ${height})`)
	.call(xAxis);
}

export default areaOuter;
