// A fast way to randomly shuffle array elements, 
// representing a deck of cards of arbitrary size, but n > 3

"use strict";

//data
var cards = ['0', '1','2','3','4','5','6','7','8','9',
'10', '11','12','13','14','15','16','17','18','19',
'20', '21','22','23','24','25','26','27','28','29',
'30', '31','32','33','34','35','36','37','38','39',
'40', '41','42','43','44','45','46','47','48','49',
'50', '51'];
//var cards = ['0', '1','2','3','4','5','6','7','8','9'];
//var cards = ['0', '1','2'];

//parameters
var iterationCount=0;  //Useful to measure efficiency of alogrithm 
var sortSpace =10;//Try setting multiplier of veryBigArraySize.length to maximize efficiency
var veryBigArray = [];
var veryBigArraySize = cards.length * sortSpace;

	for ( var ii = 0;  ii<cards.length; ii++ ){
		//create random index value for much bigger array
		var randomIndex = Math.floor(Math.random() * veryBigArraySize);
		//distribute the existing array over the much bigger array
		//taking care not to over-write existing card

		if ( veryBigArray[randomIndex] === undefined ){
 			console.log(' veryBigArray slot AVAILABLE', veryBigArray[randomIndex]);
 			veryBigArray[randomIndex] = cards[ii];
 			iterationCount= iterationCount +1;

		}
		else{ console.log('veryBigArray slot NOT AVAILABLE',veryBigArray[randomIndex]);
			ii = ii-1;  //decrement iterator to force repeat
			iterationCount= iterationCount +1;
		}
	}

	//filter undefined values
	veryBigArray = veryBigArray.filter(function(n){ return n != undefined });
 
//result
console.log (veryBigArray);
console.log("of length: ", veryBigArray.length);
console.log("iterationCount was: ", iterationCount);