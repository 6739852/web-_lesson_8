let plus=document.getElementById("plus").value
let chezka=document.getElementById("chezka").value
let mul=document.getElementById("mul").value
let num1=document.getElementById("in1").value
let num2=document.getElementById("in2").value




function f_plus(){
   let mul=document.getElementById("mul").value
   let num1=document.getElementById("in1").value
   let num2=document.getElementById("in2").value
   alert(((+num1)+(+num2)))
}
function f_mul(){
    let mul=document.getElementById("mul").value
    let num1=document.getElementById("in1").value
    let num2=document.getElementById("in2").value
    alert(((num1)*(num2)))
}
function f_chezka(){
    let mul=document.getElementById("mul").value
    let num1=document.getElementById("in1").value
    let num2=document.getElementById("in2").value
    alert(((num1)**(num2)))
}
function f_save(){
    let name=document.getElementById("name").value
    let sisma=document.getElementById("sisma").value
    name=name||"gess";
    sisma=sisma||"1234";
    alert("hello to "+name + "your code is:"+sisma)
}