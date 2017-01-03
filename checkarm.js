
function myfunction1(num){
   num=document.getElementById("num").value;
var a=num;
  {
    var rem,res=0;
while(a>1)
{
  rem=a%10;
  res=res+(rem*rem*rem);
  a=a/10;
  a=Math.floor(a);
}

if(res==num)
{
  document.getElementById("demo").innerHTML="armstrong";
}
else{
  document.getElementById("demo").innerHTML="not armstrong";
}
}
}
