import * as d3 from "d3";
import css from './style.css';
import pricesCSV from '../prices.csv';
import dataTSV from '../data.tsv';
import dataTXT from '../data.txt';
import theJSON from '../treeData.json';
import theXML from '../data.xml';

const parseDate = d3.timeParse('%m/%d/%Y');

function dataHandlers() {
    const formatRow = (d) => {
	return {
	    month: parseDate(d.month),
	    price: Number(d.price.trim().slice(1))
	};
    };

    const csvData = d3.csvParse(pricesCSV, (d) => {
        return {
            month: parseDate(d.month),
            price: Number(d.price.trim().slice(1))
        };
    });

    const nestedData = d3.nest()
	  .key(d => d.month.getMonth())
	  .entries(csvData);

    console.log(nestedData);
    
    const data = d3.tsvParse(dataTSV, formatRow);

    const psv = d3.dsvFormat('|');

    const rows = psv.parse(dataTXT);
    const newRows = rows.map(formatRow);

    const domParser = new DOMParser();
    const parsedXml = domParser.parseFromString(theXML, 'text/xml');

    const letters = Array.from(parsedXml.documentElement.getElementsByTagName('letter'));
}

export default dataHandlers;
