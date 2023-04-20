function plusMinus(arr) {
    
    var n = arr.length;
    var positivo =0;
    var negativo = 0;
    var zero = 0;

    for (let i = 0; i < n; i ++){
        if (arr[i]> 0){
            positivo +=1
        }else if (arr[i]< 0){
            negativo +=1
        }else{
            zero +=1
        }
    }
    var pos = positivo /n;
    var neg = negativo /n;
    var zer = zero / n;

    console.log(pos.toFixed (6), "\n" + neg.toFixed(6), "\n" + zer.toFixed(6));
}

plusMinus([-4, 3, -9, 0, 4, 1])