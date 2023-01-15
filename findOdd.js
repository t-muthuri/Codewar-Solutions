function findOdd(A) {
    for (i = 0; i<A.length; i++){
      let count = 0;
      for (j = 0; j<A.length; j++){
        if(A[i]==A[j]){
          count++
        }
      }
      if (count % 2 == 1) {
      return A[i];
      }
    }
    return 0;
  }

  console.log (findOdd([2, 4, 4, 4, 6, 6]))