import * as d3 from "d3";
import css from './style.css';
import pricesCSV from '../prices.csv';

function prices() {
    const svg = d3.select('body').append('svg')
	  .attr('height','100%')
	  .attr('width','100%');

    const parsed = d3.csvParse(pricesCSV);

    console.log(parsed);
}

export default prices;
