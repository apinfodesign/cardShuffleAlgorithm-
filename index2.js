//Short uncommented version
//data
var cards = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51];
//alogrithm
var iterationCount = 0;  //Useful to measure efficiency of alogrithm 
var sortSpace = 13;     //Set multiplier to maximize efficiency
var sortArray = [];
var sortArraySize = cards.length * sortSpace;
	for ( var ii = 0;  ii<cards.length; ii++ ){
 		var randomIndex = Math.floor(Math.random() * sortArraySize);
		if ( sortArray[randomIndex] === undefined ){
  			sortArray[randomIndex] = cards[ii]; 
 			iterationCount = iterationCount +1;
		} else { 
			ii = ii-1;  // force repeat for original card
			iterationCount= iterationCount +1;
		}
	}
	sortArray = sortArray.filter(function(n){ return n != undefined });

//results
	for ( var jj = 0;  jj<cards.length; jj++ ){
		console.log("original: ", cards[jj], ' shuffled: ', sortArray[jj])
	}
	console.log("Length: ", sortArray.length, " in ", iterationCount, " iterations.");