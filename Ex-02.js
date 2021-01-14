function equation (n1,n2){
let e1 = parseInt(n1);
let e2 = parseInt(n2);

let total = e1+e2 ;

return total;
}

function equation2 (n1,n2,n3){
    let e1 = parseInt(n1);
    let e2 = parseInt(n2);
    let e3 = parseInt(n3);
    let total = (e1*e2)-2 ;
    
    return total;
    }

function equation3 (n1,n2,n3,n4,n5){
        let e1 = parseInt(n1);
        let e2 = parseInt(n2);
        let e3 = parseInt(n3);
        let e4 = parseInt(n4);
        let e5 = parseInt(n5);
        let total = e1+e2+e3+e4+e5 ;
        
        return total;
        }



console.log (equation("1","1"));
console.log (equation2("7","4","2"));
console.log (equation3("1","1","1","1","1"));