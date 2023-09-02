/*
---------------------------------------------------------------------------------------------------------------------
Chanllenge 2: Non-Constructible Change

Given an array of positive integers representing the values of coins in your possession, 
write a function that returns the minimum amount of change (the minimum sum of money)
 that you **cannot** create. The given coins can have any positive integer value and
  aren’t necessarily unique (i.e., you can have multiple coins of the same value).

For example, if you’re given coins = `[1, 2, 5]`, the minimum amount of change 
that you can’t create is `4`. If you’re given no coins, the minimum amount
 of change that you can’t create is 1.
---------------------------------------------------------------------------------------------------------------------

This function sorts the array from smallest to largest, 
so that it can evaluate whether the minimum amount of change exists or not. 
*/

function nonConstructibleChange (coins =[]) {
    coins.sort((a,b) => a-b );
    let concurrentChange = 0;

    for (let index = 0; index < coins.length; index++) {
        const coin = coins[index];

        // si la matriz de moneda es mayor que la posicion actual, le suma 1 porque existe
        //if the currency matrix is greater than the current position, it adds 1 to it because it exists
        if (coin > concurrentChange + 1) {
            return amountOfChangeExistent(concurrentChange + 1);
            }
        // En ese caso se le suma el valor a la variable que guarda la matriz de moneda
        // In this case, the value is added to the variable that stores the currency matrix.
            concurrentChange+=coin;
        }
        // If array is empty or the firts coin in the array is not 1, then return 1
        return amountOfChangeToCreated (concurrentChange+1);
    }

// amountOfChangeExistent
// amountOfChangeToCreated

module.exports  = nonConstructibleChange;