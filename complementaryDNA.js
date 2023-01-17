function DNAStrand(dna){
let sequence = {
    "A":"T",
    "G":"C",
    "T":"A",
    "C":"G"
} 
return dna.replace (/A|T|G|C/g, (matched) => {
    return sequence [matched]})
}

console.log (DNAStrand("ATTGC"))