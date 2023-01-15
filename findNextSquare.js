function findNextSquare(sq) {
  return Math.sqrt(sq) % 1 ? -1 : (Math.sqrt(sq) + 1) ** 2;
}

console.log(findNextSquare(344));
console.log(findNextSquare(144));
