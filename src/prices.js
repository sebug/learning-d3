import * as d3 from "d3";
import css from './style.css';
import pricesCSV from '../prices.csv';

const parseDate = d3.timeParse('%m/%d/%Y');

function prices() {
    const svg = d3.select('body').append('svg')
	  .attr('height','100%')
	  .attr('width','100%');

    const parsed = d3.csvParse(pricesCSV, (d) => {
	return {
	    month: parseDate(d.month),
	    price: Number(d.price.trim().slice(1))
	};
    });

    console.log(parsed);
}

export default prices;
