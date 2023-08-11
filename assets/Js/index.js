{
    let text = "Hello world, welcome to the universe.";
    text.includes("world", 12);
console.log(text)    
}


{
    console.log(parseInt(-50));
    parseInt("0.0")
}

{
    console.log(parseFloat(-50.333));
    parseInt("0.0")
}

{
    let person ={
        name: "AbdulKerim",
        age: 25,
        isMaried: false,
        adress: {
            country: "Georgian", 
            street: "Khatai st",  
        },
        
      getFullAdress : function () {
        console.log(this);
      },
    };


person.getFullAdress()


}

{
   { const arr=["Kerim",25,false,{ name: "Neci" , phone : "+9943333356" }, "Suleymanli"]
    

console.log(arr)
   }
}

{
    const arr =[1,2,3,4,5, "Hello Front developer", false];
    console.log(...arr);
}
{
    const cars =new Array("PRIUS","VAZ 21-06","VAZ 21-011")
    console.log(cars)
}

{
    const fruits =["Banana","Alma","Cofee", "Sitrus"];
    console.log(fruits.pop())
}

{
    const fruits = ["Banana","Alma","Cofee", "Sitrus"];
    console.log(fruits.toString())
}
{
    const fruits = ["Banana","Alma","Cofee", "Sitrus"];
    console.log(fruits.push("Patato"));
    console.log(fruits.push("Kok"));
    console.log(fruits.push("Onion"));
    console.log(fruits.push("apple"));
    console.log(fruits)
} 

// {
//     function addFruits (fruit){
//         fruits.push(fruit);
//         console.log(fruits);
//     }
//     addFruits("kivi");
//     addFruits("ananas");
//     addFruits("portagal");
// }


 {  const number = ["1","2","3","4","5","6"];

const single = number.slice(2);
console.log(single);
 }

 {
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);
 }


 {
    const arr =[1,2,3,4,5,6,7,8,9,10];
    arr.forEach((item)=>{
        console.log(item);
})
 }

 {
    const users = [
        {name:"Karim" , surname: "Suleymanli"} ,
        {name:"Naji" , surname:"Suleymanli"},];
        users.forEach((user) => {
            console.log(user.name)})}

        {
            const users = [
                {name:"Karim" , surname: "Suleymanli"} ,
                {name:"Naji" , surname:"Suleymanli"},
                {name:"Adem" , surname:"Suleymanli"},
                {name:"Elnur" , surname:"Suleymanli"},
                {name:"Suleyman" , surname:"Suleymanli"},
            ];
                users.forEach((user) => {
                    console.log(user)
                }
                )
                }

                
                // {
                //     const users = [
                //     {name:"Karim" , surname: "Suleymanli"} ,
                //     {name:"Naji" , surname:"Suleymanli"},];
                //     for ( i in users[i])
                //     {
                //         console.log(users[i]);
                //     }
                // }
 
                // ! Home Work

               
            {
                const str = 'Salam';
                const res = str
                .split('')
                .reverse()
                .join ('')
                console.log(res)
            }


{
    let a = [1, 2, 3, 4];
    let b = [1, 2, 3, 4, 5]
    a<=6?   console.log("4"): console.log("5")
}


        
     {
        let a = [1, 2, 3, 4, 5, 6];
        let b = [7, 8, 9, 10, 11, 6];
        a.sort(function(a, b){return b - a});
        console.log(a)
} 
     

{
    let a = [1, 2, 3, 4, 5, 6];
    let b = [7, 8, 9, 10, 11, 6];
    a.sort(function(b, a){return a - b});
    console.log(b)
}



{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
b.sort(function(a, b){return b - a});
console.log(a[4])
}
{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
a.sort(function(a, b){return b - a});
console.log(b[4])
}

{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
a.sort(function(a, b){return b - a});
console.log(b[3])
}

{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
a.sort(function(a, b){return b - a});
console.log(b[2])
}

{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
a.sort(function(a, b){return b - a});
console.log(b[1])
}

{
    const a = [1, 2, 3, 4, 5, 6];
    const b=[7, 8, 9, 10, 11, 6]
a.sort(function(a, b){return b - a});
console.log(b[0])
}
//     {const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b - a});
//      console.log(points)
// }

        