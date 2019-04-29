// --------------------------Simple Scatter-Plot with ES2015-------------------------------------

let w = 500
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








