let a=["animal","fruits","birds","school"]
// console.log(a)

// console.log(a[1])
// console.log(a[3])   //index

// let b=a.length   //length
// console.log(b)

// for(let i=0;i<b;i++)
// {
//     console.log(a[i])
// }
// a[1]="king"   //replace a element
// console.log(a)

// a[4]="college"  //add one element in last
// console.log(a)

// a.push("hello","hai") //add multiple elements
// console.log(a)

// a.pop()    //remove last element
// console.log(a)


// a.shift()
// console.log(a)   //shift the first element
// a.unshift("students","manager")   //adds the first element
// console.log(a)


// b=a.slice(1,3)

// console.log(b)     //negative index, -1 is the last element
// console.log(a)



a.splice(1,2)  //first index second delete count
console.log(a)      //remove  element from the array and also add new elements


a.splice(1,2,"client","staff","leader")
console.log(a)
