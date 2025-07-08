function customFetch(endpoint,method,body) {
    return new Promise(function (resolve, reject) {
       
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function () {
            const response = JSON.parse(this.responseText);

            if (this.status === 201) {

                resolve(response);


            } else if (this.status === 400) {
                  
                reject(response)

            } else {
                console.log("500", response)
                reject(response)
            }
        }
       
        xhttp.open(method, endpoint);
        // this is used to send headers remember if we are sedning json we need to pass
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

        // here we send body in GET it is empty body always string so always wrap your object with JSON.stringufy
        xhttp.send(body);

    })


}


async function runPromise(){

    try{

        let endpoint = 'https://api.escuelajs.co/api/v1/users/';
        let method = "POST";
        const body = JSON.stringify({
            "name": "Nicolas",
            "email": "nico@gmail.com",
           "password":"This is new",
           "avatar": "https://picsum.photos/800"
        })
        const result = await customFetch(endpoint,method,body);
        console.log(result);

    }catch(err){

        console.log("Hereee")
        console.log(err);
    }
}


runPromise();


class A {
    constructor() {
        this.name = "A";
    }

    getName() {
        return this.name;
    }  
    
    setName(name) {
        this.name = name;
    }
}


A.prototype.getName = function(){

};




Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}


Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
}


let arr = [1, 2, 3, 4, 5];

let newArr = arr.map(function(item,index){
 
    return item * 2;


})


let filter = arr.filter(function(item,index){
 
    return item > 2;
})

console.log(newArr);    

