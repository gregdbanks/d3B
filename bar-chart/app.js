// --------------------------Simple Bar Chart with ES2015-------------------------------------
let w           = 300,
    h           = 200,
    barPadding  = 1;

let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
               11, 12, 15, 20, 18, 17, 16, 18, 23, 25, 
               13,11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

//Create SVG element
let svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

// Next, instead of creating divs, we generate rects and add them to svg:
    svg.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
           // You get bar width by dividing width by whatever-
           // the length is of your dataset 
            .attr("x", (d, i) => i * (w / dataset.length))
            .attr("y", d => h - (d * 8))
            .attr("width", w / dataset.length - barPadding)
            .attr("height", d => d * 8)
            .attr("fill", d => `rgb(0, ${Math.round(d * 10)}, ${Math.round(d * 8)} )`);

// last we add number labels to the bars:
    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
            .text(d => d)
            // Multiplication and division done first-THE ORDER OF PRECEDENCE:
            .attr('x', (d,i) => i * (w / dataset.length) + (w / dataset.length - barPadding) / 2)
            .attr('y', d => h - (d * 8) + 10)
            .attr("font-family", "sans-serif")
            .attr("font-size", "7px")
            .attr("fill", "white")
            // Center text element in bar
            .attr("text-anchor", "middle");






