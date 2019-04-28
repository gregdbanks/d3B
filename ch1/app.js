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





