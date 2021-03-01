function sumTwoSmallestNums(arr){

let sum = [];


for(let i=0 ;i< arr.length;i++){

let min = Math.min.apply(Math,arr);

//ไม่เอาค่า ติดลบ
if(min < 0){
let index = arr.indexOf(min);
arr.splice(index,1);
}

else {

    sum.push(min);
    let index = arr.indexOf(min);
    arr.splice(index,1);

}

if(sum.length == 2)
    break;
      i =0;


}

return (sum[0]+sum[1]);




}



console.log(sumTwoSmallestNums([19, 5, 42, 2, 77]))
console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453, ]))
console.log(sumTwoSmallestNums([2, 9, 6, -1]))
console.log(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, -791, -587]))
console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]))
