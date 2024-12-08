let promise = new Promise(function(resolve, reject) {
    resolve("success")

})
promise.then((data)=>{
    console.log(data)
})
promise.catch((data)=>{
    console.log(data.message)
})