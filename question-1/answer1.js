function lowercaseword (mixedarray){
    return new Promise ((resolve,reject)=>{
        if (!Array.isArray(mixedarray)) {
            reject("Input is not an array");
        } else {
            const result = mixedarray
            .filter(item => typeof item === "string")
            .map(word => word.toLowerCase()); 

            resolve(result);
        }
    });
}

const mixedarray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowercaseword(mixedarray)
.then(output => console.log(output))
.catch(error => console.log(error));