function    removeDups(array){

/* วิธีที่ 1
return Array.from(new Set(arr)); */


//วิธีที่ 2
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (i != j) { //ไม่เอา index ที่ตรงกัน 
                if (array[i] == array[j]) {
                    array.splice(j, 1)
                }
            }
        }
    }

    return (array)
}




  
  
  // calling the function
  // passing array argument
  console.log (removeDups([1,0,1,0]));
  console.log (removeDups(["The","big","cat"]));
  console.log (removeDups(["John","Taylor","John"]));