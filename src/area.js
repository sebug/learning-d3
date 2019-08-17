import * as d3 from "d3";
import css from './style.css';

function areaOuter() {
    let randomData = [];
    for (let i = 0; i < 17; i += 1) {
	randomData.push(Math.round(Math.random() * 200));
    }
    let years = [];
    for (let i = 0; i < 17; i += 1) {
	years.push((2000 + i).toString());
    }
    const height = 200;
    const width = 500;

    const area = d3.area()
	  .x((d, i) => i * 20)
	  .y0(height)
	  .y1((d, i) => height - d);

    const svg = d3.select('body').append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');

    svg.append('path').attr('d', area(randomData));
}

export default areaOuter;
