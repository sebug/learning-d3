import * as d3 from "d3";
import css from './style.css';
import theJSON from '../treeData.json';

function tree() {
    const height = 200;
    const width = 500;
    const margin = {
	top: 40,
	left: 50,
	right: 50,
	bottom: 0
    };
    const treeLayout = d3.tree().size([width, height]);

    const svg = d3.select('body').append('svg')
	  .attr('width', '100%')
	  .attr('height', '100%');


    const chartGroup = svg.append('g')
	  .attr('transform', `translate(${margin.left}, ${margin.top})`);

    const root = d3.hierarchy(theJSON[0]);

    treeLayout(root);

    chartGroup.selectAll('circle')
	.data(root.descendants())
	.enter()
	.append('circle')
	.attr('cx', (d, i) => d.x)
	.attr('cy', (d, i) => d.y)
	.attr('r', 5);

    console.log(root);
}

export default tree;
