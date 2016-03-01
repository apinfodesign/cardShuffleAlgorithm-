//Short uncommented version
// A fast way to randomly shuffle array elements, 
// representing a deck of cards of arbitrary size
// Modify sortSpace to test performance.
var cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,
             20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,
             40,41,42,43,44,45,46,47,48,49,50,51];
console.time("dbsave"); 	//start timing
var sortSpace = 4;   		//Affects memory used for sort
 
var shuffle = function( cards, sortSpace){
	var iterationCount = 0;  	//Useful to measure efficiency of alogrithm 
	var sortArray = [];
	var sortArraySize = cards.length * sortSpace;
	for ( var ii = 0;  ii<cards.length; ii++ ){
 		var randomIndex = Math.floor(Math.random() * sortArraySize);
 		if ( sortArray[randomIndex] === undefined ){
   			sortArray[randomIndex] = cards[ii]; 
 			iterationCount = iterationCount +1;
		} else {  
			ii = ii-1;  //decrement iterator to force repeat for original card
			iterationCount = iterationCount +1;
		}
	}
 	sortArray = sortArray.filter(function(n){ return n != undefined });
	return [sortArray, iterationCount];
}
var results = shuffle( cards, sortSpace);
var completeArray = results[0];
var iterations = results[1];

//result
	for ( var ii = 0;  ii<cards.length; ii++ ){
		console.log("original: ", cards[ii], ' shuffled: ', completeArray[ii])
	}
console.log(" ",  iterations, "iterations required to sort deck of : ", completeArray.length);
console.log("Sort array size was", sortSpace , " times deck size.");
console.timeEnd("dbsave");