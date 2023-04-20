function diagonalDifference(arr) {
     let diaEsquerda = 0;
     let diaDireita = 0;

     for (let index = 0; index < arr.length; index +=1){
        diaEsquerda += arr[index][index]; 
        diaDireita += arr[index][arr.length -1 - [index]];
     }
     return Math.abs([diaEsquerda - diaDireita]);
}


console.log(diagonalDifference([[1,2,3], [4,5,6], [9,8,9]]));

//console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));

