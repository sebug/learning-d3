import * as d3 from "d3";
import css from './style.css';

function prices() {
    const svg = d3.select('body').append('svg')
	  .attr('height','100%')
	  .attr('width','100%');
}

export default prices;
