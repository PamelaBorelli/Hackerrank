function aVeryBigSum(ar) {
   var soma = 0;
   for(let index = 0; index < ar.length; index ++){
    soma += ar[index];
   }
   return soma
}



console.log(aVeryBigSum([1000000001, 1000000002, 1000000003, 1000000004, 1000000005]));
  

