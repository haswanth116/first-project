function myfunction3(num){
   num=document.getElementById("num").value;
var i=1,f=1;
while(i<=num){
     f=f*i;
     i++;
 }

 document.getElementById("demo").innerHTML="the factorial of "+num+" is "+f;
 }
