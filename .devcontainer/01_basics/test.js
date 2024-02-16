//Reverse of string.....
var str = "Ham Yar Hai Tumahre";

var saveStrArray = str.split(" ")
    .map(function (word) {
        return word.split("").reverse().join("")
    })

console.log(saveStrArray.join(" "));