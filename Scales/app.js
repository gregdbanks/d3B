// let dataset = [100, 200, 300, 400, 500];


// ~ Mike's Margin Convention ~
let margin = {
    top: 20,
    right: 10,
    bottom: 20,
    left: 10
}

let width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom //instead of w, and h
// ~ ------------------------ ~


// let w       = 500
// let h       = 200
let padding = 20
let dataset = [
    [5, 20],
    [480, 90],
    [250, 50],
    [100, 33],
    [330, 95],
    [410, 12],
    [475, 44],
    [25, 67],
    [85, 21],
    [220, 88]
]

let svg = d3.select("body")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

let xScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[0])]) 
    .range([0, width - padding * 2])

let yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])]) 
    .range([height , 0]);

let rScale = d3.scaleLinear()
    .domain([0, d3.max(dataset, d => d[1])])
    .range([2, 5]);




// create circles for data 
svg.selectAll("circle") // <-- No longer "rect"
    .data(dataset)
    .enter()
    .append("circle")
    .attr("cx", d => xScale(d[0]))
    .attr("cy", d => yScale(d[1]))
    .attr("r", d => rScale(d[1]));

svg.selectAll("text") // <-- Note "text", not "circle" or "rect"
    .data(dataset)
    .enter()
    .append("text") // <-- Same here!
    .text(d => d[0] + "," + d[1])
    .attr("x", d => xScale(d[0]))
    .attr("y", d => yScale(d[1]))
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "#008bc4");












