import * as d3 from "d3";
import css from './style.css';
import dataTSV from '../data.tsv';
import dataTXT from '../data.txt';
import theJSON from '../treeData.json';

const parseDate = d3.timeParse('%m/%d/%Y');

function dataHandlers() {
    const formatRow = (d) => {
	return {
	    month: parseDate(d.month),
	    price: Number(d.price.trim().slice(1))
	};
    };
    
    const data = d3.tsvParse(dataTSV, formatRow);

    const psv = d3.dsvFormat('|');

    const rows = psv.parse(dataTXT);
    const newRows = rows.map(formatRow);

    console.log(theJSON);
}

export default dataHandlers;
