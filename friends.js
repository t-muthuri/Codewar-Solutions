function friend(friends){
    return friends.filter( function (v){ return v.length == 4})
}

console.log (friend(["Ryan", "Jeremy", "Baha"]))