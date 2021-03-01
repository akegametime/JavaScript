function who() {

    return new Promise ((resolve) => {

        setTimeout(()=> {
            resolve(":D");
        }, 200);
    });
}


function what() {
    return new Promise ((resolve) =>{
        setTimeout(() => {
            resolve("lurks");
        
        },300);
    });
}


function where(){
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve ("in the shadows");
        },500);
    });
}

async function msg () {
    const a = await who();
    const b = await what();
    const c = await where();

    console.group('a} ${b} ${c}');
}
console.log("we are look for :")
msg();
console.log('hello');