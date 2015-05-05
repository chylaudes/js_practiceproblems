function maxofTwo (a, b) {
  if (a > b) {
    return a;
  }

  return b; 

}

function maxofThree (a, b, c) {

  if (a > b && a > c) {
    return a;
  }

  else if ( b > a && b > c) {
    return b;
  } 

  else {
    return c; 
  }

}


function isVowel (x) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  if (vowels.indexOf(x) !== -1) {
    return true;
  }

  return false;
}


function sumArray (array) {

  var add = function (a, b) { return a + b;}; 

  return array.reduce(add);

}

function multiplyArray (array) {

  var multiply = function (a, b) { return a * b; };

  return array.reduce(multiply);

}

//Takes array of words and returns longest word
// ["dog", "frog", "zebra"] => zebra 

function findLongestWord (array) {
var longest = " ";
  
array.forEach(function(x){
  if (x.length > longest.length){
    longest = x;
  }
 
});

 return longest;
}

function longWordtwo (array) {
  var longest = " ";

  for (i = 0; i < array.length; i++) {
    if (array[i].length > longest.length) {
      longest = array[i];

    }
    
  }

  return longest;

}


function reverseString (string) {

  return string.split("").reverse().join("");
}

//Reverse order of words
function reverseWords (string) {

  return string.split(" ").reverse().join(" ");
}

//Reverse letters in string AND order
function reverseWordsOrder (string) {

  return string.split("").reverse().join("");
}


//Write a function, 'unique', that takes an array and returns unique (only one instance, removes duplicates) 
//elements of the array

// var array = [ 1, 1, 2, 3, 3]
//return [1,2,3]

function unique (array) {

    var newArray = [];

    array.forEach(function (x) {

      //if already exists
      if (array.indexOf(x) !== -1) {
        if (newArray.indexOf(x) !== -1)

        //push to new array

        newArray.push(x);
      }

    }); 

    return newArray; 
}


function unique(arr) {
  return arr.reduce(function(uniqueArr, value){
    if (uniqueArr.indexOf(value) === -1) {
      uniqueArr.push(value);
    }
    return uniqueArr;
  }, []);
}

function unique (array) {
  return array.reduce(function (uniqueArray, el) {
      if (uniqueArray.indexOf(el) === -1) {
        uniqueArray.push(el);
      } 
      return uniqueArray;  
  },[]); 

}

//&& newArray.indexOf(x) !== -1

function capitalize (string) {

 return string[0].toUpperCase() + string.slice(1).toLowerCase();


}

//Write a function, 'titleize', that takes a string and capitalizes the first letter of every word



function titlelize (string) {
var title = string.split(" ");
return title.forEach(function(x){
return capitalize(x).join(" ");

});

}


function titlelize (string) {
  var title = string.split(" ");
    return title.map(function(x){
      return capitalize(x);
    }).join(" ");
}

//sampleAJAX Post


function isPrime (num) {

 if (num === 2 || num === 5) {

  return true;
 }

 if (num / 1 === num && num / num === 1 && num % 2 !== 0 && num % 3 !== 0 && num % 5 !==0) {

  return true;

 }

 else {

  return false;


}

}

function letterCount (string) {

counter = 0;

  var x = string.split("");
  for (var i = 0; i < x.length; i++ ) {

    counter++;
  }

  return counter;

}

//take two sorted arrays, merge together, and sorted

function mergeNum (arry1, arry2) {

  var newArray = [];

  arry1.forEach(function (x) {
    newArray.push(x);
  });

  arry2.forEach(function (y) {
    newArray.push(y);
  });

  return newArray.sort(); 


}


function isVowel (string) {

  var counter = 0;
  string.split("").forEach(function (x) {

    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {

      counter++;

    }
  });

  return counter;
}


//Input string, return string where letters are the next letter in alphabet and vowels are capitalizied 

var letterChanges = function(str){
var letterArray = str.toLowerCase().split("");
var numLetterArray = letterArray.map(function(x){
var changedletter = x.charCodeAt(0);

    return changedletter+1; //produce a new array with 

});

  var lowCaseArray = numLetterArray.map(function(x){
  
  return String.fromCharCode(x); //make nums to lowercase letters
});

  return lowCaseArray.map(function(x){
    if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u") {
       return x.toUpperCase();
  }
   else{
      return x.toLowerCase();
  }
}).join("");
};


//Count words in a string
function wordsInString(string) {

  var counter = 0;
  string.split(" ").forEach(function (x) {

    counter++;

  });

  return counter;

}

//Palindrome function check

function palindrome(string) {

  if (string === string.split("").reverse().join("")) {
    return true;
  }

  else {
    return false;
  }

}


//Largest number in array should equal the sum of the array
function largestNumberAdd (array) {


    var largest = array.sort(function(a,b){return b-a;})[0];
    console.log("testing for the largest number",largest);


    var add = function (a, b) { 
              return a + b; 
            };


   var sumNums = array.reduce(add);
   console.log("sum of array should be 6", sumNums);

   
   if (largest === sumNums) {
    return true;
   }

   else {
    return false;
   }
  
}


//Sum of two, first parameter is array, second parameter is sum you want to expect 
//([x, y, z], a)  ---- if [x + y + z] === a?

function addArray (array, expectedTotal) {

  var add = function (a, b) { return a + b; };
  var total = array.reduce(add);

  if (total === expectedTotal) {
    return true;
  }

  else {
    return false;
  }

}


//Count Zeros in a number, from 1 to n


function phoneNumber (array) {
    var first = array.slice(0,3).join("");
    var second = array.slice(3,6).join("");
    var third = array.slice(6,10).join("");
    
    return "(" + first + ")" + " " + second + " " + "-" + " " + third; 
}

phoneNumber([1,2,3,4,5,6,7,8,9,0]); // (123) 456 - 7890

function phoneNumber (array) {

  return "(" + array.slice(0,3).join("") + ")" + " " + array.slice(3,6).join("") + " " + "-" + " " + array.slice(6,10).join("");

}


//Facebook Likes


function facebookLikes (array) {

  var length = array.length;

  var name1 = array[0];
  var name2 = array[1];
  var remaining = length - 2;

  if (length === 2 || length === 1) {

    return name1 + " and " + name2 + " " + "like this.";
  } 

  if (length === 3) {

    return name1 + ", " + name2 + ", and " + " 1 other person likes this.";
  }

  if (length > 3) {

    return name1 + ", " + name2 + ", and " + remaining + " people like this.";
  }

  if (length === 0) {
    return "No one likes this.";
  }
}

//Prime Numbers 


//"Hi there" ==> "ih ereht"

function reverseWords(string) {
  
  var a = string.split(" ");
  
 return a.map(function (x) {
      return x.split("").reverse().join("");
      
  }).join(" ");
  
}

function isPangram (string) {

  var letters = string.split("");
  var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  
  console.log("This is your string", letters);
  console.log("This is the alphabet", alphabet);


  for (var i in alphabet) {

    if (typeof alphabet[i] == letters)  {

      return true;
    }

  }

  return false;

}


  

