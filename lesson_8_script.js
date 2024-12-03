function f_plus(){
   let num1=document.getElementById("in1").value
   let num2=document.getElementById("in2").value
   alert(((+num1)+(+num2)))
}
function f_mul(){
    let num1=document.getElementById("in1").value
    let num2=document.getElementById("in2").value
    alert(((num1)*(num2)))
}
function f_chezka(){
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
function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
function f_plus_binuri(){
   let num1=document.getElementById("in1").value
   let num2=document.getElementById("in2").value
   alert(dec2bin(((+num1)+(+num2))))
}