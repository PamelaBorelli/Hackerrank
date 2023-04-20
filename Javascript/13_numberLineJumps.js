// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

function kangaroo(x1, v1, x2, v2) {
    // Write your code here
    let jump1 = x1;
    let jump2 = x2;
    let yesNo = 'NO';

    for( let index = 0; index < 10000; index +=1){
        jump1 += v1;
        jump2 += v2;

        if(jump1 === jump2){
            yesNo = 'YES';
        }
    }
return yesNo;

}

console.log(kangaroo(0,3,4,2));