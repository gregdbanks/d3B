// // this is how you format d3, notice chainable methods. d3's api is declarative. 
// // takes some getting use to

// d3.select("body")
//     .append("p")
//     .text("New paragraph!");

// // since csv file returns strings we can use this function to parse string too number
// var rowConverter = function (d) {
//     return {
//         Food: d.Food, //No conversion
//         Deliciousness: parseFloat(d.Deliciousness)
//     };
// }

// var dataset;
// // this is just an array of objects, and arrays are just objects. I know, confusing right lol
// d3.csv("food.csv", rowConverter, function (data) {
//     dataset = data;
//     console.table(data);
// });


// // some json data 20,000 jeopardy questions
// // var dataset2;

// // d3.json("jep.json", function (data) {
    // //     dataset2 = data;
    
    // //     console.table(data); //Log output to console
    // // });
    
    // var dataset = [5, 10, 15, 20, 25];
    
    
    // d3.select("body").selectAll("p")
    //     .data(dataset)
    //     .enter()    
    //     .append("p")
    //     .text(d => `I can count up to ${d}`)
    //     .style('color', d => {

    //         if(d > 15) {
    //             return 'red';
    //         } else {
    //             return 'black';
    //         }
    //         // refactored to ternary!!
    //         // let c = (d >= 15) ? 'black' : 'red';
    //         // return c;
    //     });

// var dataset = [5, 10, 15, 20, 25];
// var dataset = [25, 7, 5, 26, 11];
// var dataset = [25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
//     14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
//     24, 18, 25, 9, 3];
// var dataset = [];
// for (var i = 0; i < 25; i++) { //Loop 25 times
//     var newNumber = Math.floor(Math.random() * 30); //New random number (0-30)
//     dataset.push(newNumber); //Add new number to array
// }



// d3.select("body").selectAll("div")
//     .data(dataset)
//     .enter()
//     .append("div")
//     .attr("class", "bar")
//     .style('height', d => {
//         let barHeight = d * 5;
//         return barHeight + 'px';
//     });

// let dataset = [5, 10, 15, 20, 25];
// let w = 500;
// let h = 50;

// let svg = d3.select("body")
//                 .append("svg")
//                 .attr("width", w) 
//                 .attr("height", h);

// let circles = svg.selectAll("circle")
//                     .data(dataset)
//                     .enter()
//                     .append("circle");

// circles.attr("cx", (d, i) => (i * 50) + 25)
//         .attr("cy", h / 2)
//         .attr("r", d => d)
//         .attr('fill', '#008bc4')
//         .attr('stroke', '#db2400')
//         .attr("stroke-width", d => d / 2);

let w           = 500,
    h           = 100,
    barPadding  = 1;


let dataset = [5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
    11, 12, 15, 20, 18, 17, 16, 18, 23, 25];

// d3.select("body")
//     .selectAll("div")
//         .data(dataset)
//         .enter()
//         .append("div")
//         .attr("class", "bar")
//         .style("height", d => {
//             let barHeight = d * 5;
//             return barHeight + "px";
//         });

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
            .attr("x", (d, i) => i * (w / dataset.length))
            .attr("y", d => h - (d * 4))
            .attr("width", w / dataset.length - barPadding)
            .attr("height", d => d * 4)
            .attr("fill", d => `rgb(0, ${Math.round(d * 10)}, ${Math.round(d * 8)} )`);

    svg.selectAll("text")
        .data(dataset)
        .enter()
        .append("text")
            .text(d => d)
            .attr('x', (d,i) => i * (w / dataset.length) + (w / dataset.length - barPadding) / 2)
            .attr('y', d => h - (d * 4) + 14)
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white")
            // center text element in bar
            .attr("text-anchor", "middle");






