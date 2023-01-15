function solution(str){
  let newStr = '';
  if (str.length){
    return (str.length % 2 === 1) ? (newStr = str + '_').match(/.{2}/g) : str.match(/.{2}/g)
  }
   else {
    return [];
  }
}

console.log(solution(['abcdef']));
console.log(solution(['abcdefg']));
console.log(solution([]));