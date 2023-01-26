function findMissing(A){
    let min = 0;
    A.sort(function (a,b){return a-b});
    for (let i = 0; i<A.length; i++){
        if( A[i]>0){
            if (A[i] != min) min++;
            if (A[i] == min) continue;
            return min;
        }
    }
    min ++;
    return min;
}

let A = [1, 3, 2];
console.log (findMissing(A));