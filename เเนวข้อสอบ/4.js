function totalVolume(){


    var total =0;
    

    for(var i = 0; i < arguments.length;i++){

        var st =1; //ประกาศเพื่อเป็นตัวคูณ อยู่ใน loop เพื่อเวลาจบ 1รอบ ค่าจะเป็น 1 เหมือนเดิม
        
        for(var j =0; j <arguments[i].length;j++){

            st *= arguments[i][j]; 

        }
        total += st; 

    }

    return total;




}
  
    console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
   console.log(totalVolume([2,2,2],[2,1,1]));
    console.log(totalVolume([1,1,1]));