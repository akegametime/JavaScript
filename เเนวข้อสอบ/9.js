function digitalClock(time) {

    //วิธี 1
    let hr = time / 3600 //เเปลงวิเป็นชั่วโมง วินาที/3600 = ชั่วโมง
    hr = parseInt(hr) //เเปลงเป็น int;
    time = time - (hr * 3600)

    console.log (time);
    
    let min = time/60 //เเปลงวินาที เป็น นาที วินาที/60 = นาที
    min = parseInt(min);
    time = time - (min * 60)
    
    if(hr>=24){

        hr = "00";
    }

     if (min <10){

    min = "0"+min;
    }

    if (time <10 ){

        time = "0"+10;

    }




return (hr+" : "+min+" : "+time)   
}


console.log(digitalClock(5025))
console.log(digitalClock(61201))
console.log(digitalClock(87000))