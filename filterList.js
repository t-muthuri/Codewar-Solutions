function filterList (l){
    return l.filter( function(v){ return typeof v == 'number' })
}

console.log (filterList(['a', 2, 'b', 3]))