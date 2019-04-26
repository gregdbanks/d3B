// this is how you format d3, notice chainable methods. d3's api is declarative. 
// takes some getting use to

d3.select("body")
    .append("p")
    .text("New paragraph!");

// since csv file returns strings we can use this function to parse string too number
var rowConverter = function (d) {
    return {
        Food: d.Food, //No conversion
        Deliciousness: parseFloat(d.Deliciousness)
    };
}

var dataset;
// this is just an array of objects, and arrays are just objects. I know, confusing right lol
d3.csv("food.csv", rowConverter, function (data) {
    dataset = data;
    console.table(data);
});


// some json data 20,000 jeopardy questions
// var dataset2;

// d3.json("jep.json", function (data) {
//     dataset2 = data;
//     console.table(data); //Log output to console
// });




