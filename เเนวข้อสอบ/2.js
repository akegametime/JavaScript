function highestDigit(num){
var str = num.toString();

var strf = str.split("");


return Math.max.apply(Math,strf);




}



console.log (highestDigit(379));    
console.log (highestDigit(2));    
console.log (highestDigit(377401));    