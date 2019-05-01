// --------------------------Simple Scatter-Plot with ES2015-------------------------------------

let w = 600
let h = 400

let dataset = [
                [   5,  20 ],
                [ 480,  90 ],
                [ 250,  50 ],
                [ 100,  33 ],
                [ 330,  95 ],
                [ 410,  12 ],
                [ 475,  44 ],
                [  25,  67 ],
                [  85,  21 ],
                [ 220,  88 ]
]

let svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h)

// create circles for data 
svg.selectAll("circle") // <-- No longer "rect"
    .data(dataset)
    .enter()
    .append("circle")
        .attr("cx", d => d[0])
        .attr("cy", d => d[1] + 20)
        .attr("r", d => Math.sqrt(h - d[1]));

svg.selectAll("text") // <-- Note "text", not "circle" or "rect"
    .data(dataset)
    .enter()
    .append("text") // <-- Same here!
    .text(d => d[0] + "," + d[1])
    .attr("x", d =>d[0])
    .attr("y", d =>d[1])
    .attr("font-family", "sans-serif")
    .attr("font-size", "11px")
    .attr("fill", "#008bc4");











