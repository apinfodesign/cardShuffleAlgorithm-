// commented version
// A fast way to randomly shuffle array elements, 
// representing a deck of cards of arbitrary size
 "use strict";

//data
// var cards = ['0', '1','2','3','4','5','6','7','8','9',
// '10', '11','12','13','14','15','16','17','18','19',
// '20', '21','22','23','24','25','26','27','28','29',
// '30', '31','32','33','34','35','36','37','38','39',
// '40', '41','42','43','44','45','46','47','48','49',
// '50', '51'];

var cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
             20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
             40,41,42,43,44,45,46,47,48,49,50,51];

//var cards = ['0', '1','2','3','4','5','6','7','8','9'];
//var cards = ['0', '1','2'];
//var cards = [0,1];
//var cards = ['ace','king','queen','jack','10','9'];

console.time("dbsave");

//parameters
var iterationCount = 0;  //Useful to measure efficiency of alogrithm 
var sortSpace = 10;
//Try setting multiplier of sortArraySize.length to maximize efficiency and speed

var shuffle = function(iterationCount, cards, sortSpace){
	var sortArray = [];
	var sortArraySize = cards.length * sortSpace;
	for ( var ii = 0;  ii<cards.length; ii++ ){
		//create random index value for much bigger array
		var randomIndex = Math.floor(Math.random() * sortArraySize);
		//distribute the existing array over the much bigger array
		//taking care not to over-write an existing card

		if ( sortArray[randomIndex] === undefined ){
 			console.log(' sortArray slot AVAILABLE', sortArray[randomIndex]);
 			sortArray[randomIndex] = cards[ii]; 
 			iterationCount = iterationCount +1;

		} else { console.log('sortArray slot NOT AVAILABLE',sortArray[randomIndex]);
			ii = ii-1;  //decrement iterator to force repeat for original card
			iterationCount = iterationCount +1;
		}
	}
	//filter undefined values
	sortArray = sortArray.filter(function(n){ return n != undefined });
	return [sortArray, iterationCount];
}

var results = shuffle(iterationCount, cards, sortSpace);
var completeArray = results[0];
var iterations = results[1];

//result
	for ( var ii = 0;  ii<cards.length; ii++ ){
		console.log("original: ", cards[ii], ' shuffled: ', completeArray[ii])
	}

console.log("iterationCount was: ", iterations);
console.log("For shuffling card deck of length: ", completeArray.length);
console.log( sortSpace, ' is sort array size. ' );
console.timeEnd("dbsave");
