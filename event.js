let heading=document.getElementById("head")
let btn=document.getElementById("btn")

btn.addEventListener("click",changecolor)
heading.addEventListener("mouseover",changebg)
heading.addEventListener("mouseleave",removebg)

function changecolor(){
    heading.style.color="red"
    

}
function changebg(){
    heading.style.backgroundColor="pink"

}
function removebg(){
    heading.style.backgroundColor="purple"
}