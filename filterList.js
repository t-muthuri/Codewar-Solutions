function filterList (l){
    return l.filter( function(v){ return typeof v == 'number' })
}

console.log (filterList(['maurice', 06, 'muthuri', 2023]))