# cardShuffleAlgorithm-  miles.hochstein 

This javascript randomly shuffles a deck of cards of arbitary size.

It balances two constraints. (1) Sort array size (larger means fewer collisions) and (2) collision correction (which has some computational cost).

You could test empirically to find sweet spot for sort array size.  The correct spot would balance allocation of memory with iteration cycles.  

No guarantee that your random sort will not be identical to the original array, but this becomes very improbable with a 52 card deck.   For very small arrays this would need to be checked and happens often.

Several sample card decks are provided.  Comment them in or out for testing.
