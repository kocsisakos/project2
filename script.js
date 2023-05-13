// color picker
let left = document.getElementById("colorpicker").style.color;
let right = document.getElementById("row");
// console.log(left, right);
var num = left.replace(/rgb\(([\s\S]+?)\)/g, "$1");
console.log(num);
var num2 = num.replace(/\s/g, "");
var array = num2.split(",");
console.log(array)
array.forEach(valueToHex);
function valueToHex(c) {

    var hex = c.toString(16);
    
    console.log(hex);
    return hex
}