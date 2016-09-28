// Long Question 1

var words = ["hello", "what", "is", "up", "dude"];

var length = words.map (function (obj) {
  return obj.length;
});

console.log(length);

// Short Questions

// Question 4

//part a
var nums = [1,2,3,4];

var add = function(a,b) {
  return a+b;
};

var sum = nums.reduce(add);
console.log(sum);

//part b
var nums = [1,2,3,4];

var mult = function(a,b) {
  return a*b;
}

var sum= nums.reduce(mult);
console.log(sum);

//Question 7


// Question 8

var x = ["apple","banana","carrot", "dumpling"];

var longest = function (obj) {
  return obj.length > 7;
}

var moreThanSeven = x.filter(longest);

console.log(moreThanSeven);

// Iterators Practice

var str = "The quick brown fox jumped over the lazy dog";

// find the largest number in array of array
// hint: map and reduce

var split = str.split (" ")
console.log(split)


var strr = function(current, longest) {
  return (current.length > longest.length)? current : longest;
  }

var long = split.reduce(strr);
  console.log(long)





var arrOfArr =
    [
      [4, 5, 1, 3],
      [13, 27, 18, 26],
      [32, 35, 37, 39],
      [1000, 1001, 857, 1]
    ];

// output ==> [ 5, 27, 39, 1001 ]
