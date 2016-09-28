
// Long Questions

// Question 1

var words = ["hello", "what", "is", "up", "dude"];

lengths(words);

function lengths(wordsStr) {
  //0. create temp var to hold the array of length
  var wordsArr = [];

// 1. Iterate the array given into the function
  for(var i =0; i <wordsStr.length; i++) {

// console.log(wordsStr[i]);
// 2. Within the loop, find the lengths of each one
// console.log(wordsStr[i].length);

// 3. return the array of length
    wordsArr.push(wordsStr[i].length);
  }
  return wordsArr;
}

console.log(lengths(words));

// Question 2

function transmogrified(a,b,c) {
  return Math.pow((a * b), c);
}

console.log(transmogrified(5, 4, 3))
console.log(transmogrified(13, 12, 5))
console.log(transmogrified(42, 13, 7))

// Question 3

function wordReverse(x) {
    var splitString = x.split(" ");
    var reverse = splitString.reverse();
    var joinArray = reverse.join(" ");
    return joinArray;
}
wordReverse("Now I know what a TV dinner feels like");

// Short Question

// Question 1

function maxOfTwoNumbers(x,y) {
  if (x > y) {
    return x;
  }
  else if (x < y) {
    return y;
  }
}

console.log(maxOfTwoNumbers(1,2));

// Question 2

function maxOfThree(x,y,z) {
  if (x > y && x > z) {
    return x;
  } else if (y > x && y > z) {
    return y;
  } else {
    return z;
  }
}
console.log(maxOfThree(1,2,3));

// Question 3

function isCharacterAVowel(vow) {
	if (vow == "a" || vow == "e" || vow ==
		"i" || vow == "o" || vow == "u") {
		return true;
	}
	else {
		return false;
	}
}
console.log(isCharacterAVowel("a"));

//Question 4

var sumArray = function(a,b,c,d) {
  return a+b+c+d;
};

console.log(sumArray(1,2,3,4));

var multiplyArray = function(a,b,c,d) {
  return a*b*c*d;
};

console.log(multiplyArray(1,2,3,4));

// Question 5

function numberOfArguments() {
    return arguments.length;
}

console.log(numberOfArguments("apple"));
console.log(numberOfArguments("apple","banana"));

// Question 6

function reverseString(x) {
    var splitString = x.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    return joinArray;
}
reverseString("hello");

// Question 7

function findLongestWord(x) {
  var strSplit = x.split(' ');
  var longestWord = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > longestWord){
	longestWord = strSplit[i].length;
     }
  }
  return longestWord;
}
findLongestWord("Hello How are you");

// Question 8

var x = ["apple","banana","carrot", "dumpling"];
var y = [];

function filterLongWords(words, length) {
  for (var i = 0; i < words.length; i++) {
  	if (words[i].length > length) {
  		y.push(words[i]);
  	}
  }	return y;
}

console.log(filterLongWords(x, 7));
