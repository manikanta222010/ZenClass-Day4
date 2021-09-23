var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 1" };

const isEqual = () =>{
    if(Object.keys(obj1).length==Object.keys(obj2).length){
        for(key in obj1) { 
            if(obj1[key] !== obj2[key])
                return console.log("Objects are not equal");;
        }
    }
    else {
        return console.log("Objects are not equal");
    }
    return console.log("Objects are equal");
}
isEqual()

