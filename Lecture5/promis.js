const promise = new Promise((resolve, reject)=>{
    const res = true;
if (res) {

    resolve("resoled!");

}else {

    reject(Error("fatal error "));
}
});

promise.then
{

    (res) => console.log(res),
    (err) => console.log(err)
};