function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1){
    return -1;
      }
          return (Math.sqrt(sq) +1) **2
  }
  
  //   Algorithm
  //   find the squareroot of the argument sq - Math.sqrt()
  //   if the is a remainder return -1 - % operator to check for remainders
  //   if the answer is a whole integer,
  //   add 1 +1 or ++
  //   sq the new integer and return the value