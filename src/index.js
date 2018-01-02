import './index.scss'
import * as d3 from 'd3'

const w = 500
const h = 100
const dataset = [0, 1, 2, 3, 4, 5, 6]

const svg = d3.select('#app').append('svg')
  .attr('width', w)
  .attr('height', h)

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('cx', d => d * 20 + 20)
  .attr('cy', h / 2)
  .attr('r', 10)
