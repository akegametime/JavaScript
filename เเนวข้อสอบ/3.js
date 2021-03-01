


function capToFront(str){

var strf = str.split("");

var a1 = "";
var a2 = "";



for(var i =0;i< strf.length;i++){


    if (strf[i] == strf[i].toUpperCase()){    
    

    a1 += strf[i];
}

else if (strf[i] == strf[i].toLowerCase()){

    a2 += strf[i];
}

}

return a1+a2;


}




console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));