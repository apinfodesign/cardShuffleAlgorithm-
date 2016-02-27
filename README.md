# cardShuffleAlgorithm-  miles.hochstein 

This javascript randomly shuffles a deck of cards of arbitary size, from n = 3 to some large value.

Balances two constraints. (1) Sort array size (larger means fewer collisions) and (2) collision correction (which has some computational cost).

You could test empirically to find sweet spot for sort array size.

No guarantee that your random sort will not be identical to the original array, but this becomes very improbable with a 52 card deck.   For smaller arrays this would need to be checked.
