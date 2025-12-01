// let a=document.getElementsByTagName("p")
// let b=document.getElementById("head1")
// function hello(){
//     b.innerHTML=Date()
// }
let a=document.getElementById("abc")
count=0

function increase(){
    count++
    a.innerHTML=count
}
function decrease(){
    count--
    a.innerHTML=count
}
function reset(){
    count=0
    a.innerHTML=count
}