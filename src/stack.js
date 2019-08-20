import * as d3 from "d3";
import css from './style.css';
import theXML from '../data2.xml';

function stack() {
    const parseDate = d3.timeParse('%Y');
    
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

    console.log(dataXml);
}

export default stack;
