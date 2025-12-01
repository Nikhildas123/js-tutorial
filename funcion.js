// function greet(name,age,number){      //funcion declaration
    // console.log(`my name is ${name} my age is ${age}`)

//     console.log("my name is " + name + "my age is " + age + "my number is " + number)
// }
// greet("nikhil",22,7907645273)
// greet("razil",21,9856325698)

// function sum(a,b){
//     console.log(a+b)
// }
// sum(10,20)
// sum(30,50)

// function sum(a,b){
// return a+b
// }
// console.log(sum(29,20))
// sum(20,20 )

// function sum(a,b){
// return a+b
// }
// console.log(sum(29,20))
// c=sum(20,22)
// console.log(c+102-44%5)


//function expression
// let greet=function(name){
// console.log(`my name is ${name}`)
// }
// greet("nikhil")

//arrow function shorter syntax

// let greet=(name)=>{
// console.log(`hello,${name}`)
// }
// greet("nikhil")


// let greet=(name)=>
// "hello"+name
// console.log(greet(" nikhil"))

// let mul=(a,b)=>`${a*b}`
// console.log(mul(5,2))
// console.log(mul(5,3))

// let mul1=(a,b)=>`${a/b}`
// console.log(mul1(10,2))
// console.log(mul1(50,3))

//default parameter
// function greet(name="razil"){
// console.log(`my name is ${name}`)
// }
// greet("nikhil")



// function sum(...numbers){
//     return numbers.reduce((a,b)=>a+b,0)    //reduce function
// }
// console.log(sum(1,2,3,4,5,))



//filter
// function even(...numbers){
//     return numbers.filter(a=>a%2==0)  
// }
// console.log(even(1,2,3,4,5,6,7,8,9,10))

//map
function square(...numbers){
    return numbers.map(a=>a**2)  
}
console.log(square(1,2,3,4,5,6,7,8,9,10))
