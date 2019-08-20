import * as d3 from "d3";
import css from './style.css';
import theXML from '../data2.xml';

function stack() {
    const domParser = new DOMParser();
    const parsedXml = domParser.parseFromString(theXML, 'text/xml');

    console.log(parsedXml);
}

export default stack;
