var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
var el = document.getElementById("planets");

/* Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets". */
function forEFunc(element, index, array) {
    el.innerHTML += (element + " ");
}
var combo = planets.forEach(forEFunc);
el.combo;

// Use the map method to create a new array where the first letter of each planet is capitalized
// .map(function(str){return str}) toUpperCase after you seperate by individual index and upper only index [0]? 
function firstCap(element, index, array) {
  // console.log(element = element.split("").shift());
  // console.log(element.split("").shift().toUpperCase() );
  // element = element[0].toUpperCase() + element.split("").shift();
  // console.log(element, index, array);
  /* ---- after a lot of screwing around, this is what I came up with: ----*/
  element = " " + element[0].toUpperCase() + element.substring(1);
  return element;
/* .map goes through each item in the array and sets you up to use a callback function to play with 
the element itself, which I did here. You can also use the index number of element, or the entire original array.
NOTE: .substring works by giving the index number of the place you want to start in a string and index of end.
If no end is provided as here, it will go to the end of the string. */
};
var firstCaps = planets.map(firstCap); /* holds the map function */ 
document.getElementById("forEach").innerHTML += firstCaps; 

// Use the filter method to create a new array that contains planets with the letter 'e'
// .filter(function(str){return str }) // use indexOf to find the ones with e and then use filter? 
var newArrayFilter = [];
function eOnly(value, index) {
/* console.log(value.indexOf("e"), index);  <--- this shows index # next to planets that have a -1, which means no "e" */
    if (value.indexOf("e") !== -1) {
        return " " + value; 
    }
    // return value.includes("e"); /* <----- found this much shorter version online. 
};
newArrayFilter = planets.filter(eOnly);
document.getElementById("filter").innerHTML += newArrayFilter;

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
// document.write(words).reduce(function(previous, current){return previous + current});
var newArrayReduce = [];
function clean(previous, current, index, array) {
    return previous + " " + current;
    // console.log(previous, current, index, array);
};
newArrayReduce = words.reduce(clean)
document.getElementById("reduce").innerHTML += newArrayReduce;







