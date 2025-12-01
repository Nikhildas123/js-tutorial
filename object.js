// let a={
//     name1:"nikhil",
//     age:"20",
//     course:"python",
//     array:[1,2,3,4]
// }

// console.log(a.age)


let a={
    Name:"Nihkil",
    age:"21",
    fun:function(){
        console.log(this.Name)
    },
    arrow:()=>this.age
}
a.fun()
console.log(a.arrow())