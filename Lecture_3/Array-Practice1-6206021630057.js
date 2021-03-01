let values1 = ['Apple',1,false];
let values2 = ['Fries',2,true];
let values3 = ['Mars',9,'Apple'];


function tieb(one,two){
    let str = "[ ";
    if(typeof one[0]== typeof two[0]){
        str+=true +",";
  
    }
    if(typeof one[1]== typeof two[1]){
        str+=true+",";
        }
     if(typeof one[2]== typeof two[2]){
            str+=true;
        }
        if(typeof one[0]!= typeof two[0]){
            str+=false+",";
        }
      if(typeof one[1]!= typeof two[1]){
            str+=false+",";
        }

      if(typeof one[2]!= typeof two[2]){
            str+=false;
        }
    

        str=str+" ]";
        return(str);
}


console.log(tieb(values1,values2));
console.log(tieb(values2,values3));
console.log(tieb(values1,values3));