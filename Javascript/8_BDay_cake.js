// You are in charge of the cake for a child's birthday. You have decided the cake will have one candle 
// for each year of their total age. They will only be able to blow out the tallest of the candles. 
// Count how many candles are tallest.

function birthdayCakeCandles(ar) {
    // Write your code here
    let max = 0;
    let candles = 0;

    for (let i = 0; i < ar.length; i++){
        if (max < ar[i]){
            max = ar[i];
        }
    }
    for (let i = 0; i< ar.length; i++){
        if(max == ar[i]){
            candles++;
        }
    }
    return candles;
}

console.log (birthdayCakeCandles ([4,4,1,3]))