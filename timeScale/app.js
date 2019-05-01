// var parseTime = d3.timeParse("%m/%d/%y")

// console.log(parseTime("02/20/17"))

// console.log(parseTime("02/20/69"))

// console.log(parseTime("02/20/68")) // 2068? lol..use %Y instead

//Width and height
var w = 500;
var h = 300;
var padding = 40;

var dataset, xScale, yScale; //Empty, for now

//For converting strings to Dates
var parseTime = d3.timeParse("%m/%d/%y");

//For converting Dates to strings
var formatTime = d3.timeFormat("%e");

//Function for converting CSV values from strings to Dates and numbers
var rowConverter = function (d) {
    return {
        Date: parseTime(d.Date),
        Amount: parseInt(d.Amount)
    };
};

//Load in the data
d3.csv("time_scale_data.csv", rowConverter, function (data) {

    //Copy data into global dataset
    dataset = data;

    //Create scale functions
    xScale = d3.scaleTime()
        .domain([d3.min(dataset, d => d.Date),d3.max(dataset, d => d.Date)])
        .range([padding, w - padding]);

    yScale = d3.scaleLinear()
        .domain([d3.min(dataset, d => d.Amount),d3.max(dataset, d => d.Amount)])
        .range([h - padding, padding]);

    //Create SVG element
    var svg = d3.select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h);

    //Generate date labels first, so they are in back
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
        .text(d => formatTime(d.Date))
        .attr("x", d => xScale(d.Date) + 4)
        .attr("y", d => yScale(d.Amount) + 4)
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "#bbb");

    //Generate circles last, so they appear in front
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", d => xScale(d.Date))
        .attr("cy", d => yScale(d.Amount))
        .attr("r", 2);

});





