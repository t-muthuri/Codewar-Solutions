function isPangram (string) {
    string = string.toLowerCase('')
    return alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('').every(x => string.includes(x));
}

console.log(isPangram("Is this a pangram?"));
console.log(isPangram("The quick brown fox jumps over the lazy dog"));