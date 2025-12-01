let s1="Nikhildas"
let s2='Nikhildas'
let s3=`Nikhildas`
console.log(s1);
console.log(s2);
console.log(s3);
// console.log(s1[0]) //for getting a particular index value
// console.log(s1.length); //for getting the length on the string


//iterate over loop
// for(let i=3;i<s1.length;i++){ //this is how to iterate a string using for loop
//     console.log(s1[i])   
// }

// console.log(s1.substring(0,4));
// console.log(s1.slice(0,5));
// console.log(s1.slice(-4,));
// console.log(s1.slice(5,));
// console.log(s1.substr(3,8))
// s2="Paragraph writing involves creating a \
// group of related sentences that develop a single\
//  main idea, making writing clear and easy for the reader to follow"
//  s3="idea"
//  console.log(s2.search(s3) )
// a="today is \
// a bad day"
// console.log(a.replace("bad","good"))
 
//concatination
//  let fname="nikhil";
//  let lname="das";     
//  console.log( "my name is " + fname+" " +lname);



let fname="nikhil";
let lname="das";
console.log(`my name is ${fname}${lname}`)

//to upper case and lowercase
let fullname=`${fname}${lname}`
console.log(fullname.toLowerCase())
console.log(fullname.toUpperCase())


