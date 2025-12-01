function apply(a,b,operation){
    return operation(a,b)
}
let add=(x,y)=>x+y
let minus=(x,y)=>x-y
let multiply=(x,y)=>x*y
console.log (apply(2,5,add))
console.log (apply(2,5,minus))
console.log (apply(2,5,multiply))