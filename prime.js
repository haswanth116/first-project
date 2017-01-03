function myfunction2(num){
   num=document.getElementById("num").value;
var  n=num,flag=0;
{
  for(var i=2; i<=n/2; ++i)
    {
        if(n%i==0)
        {
            flag=1;
            break;
        }
    }
    if(flag==0)
    {
      document.getElementById("demo").innerHTML="prime";
    }
    else {
      document.getElementById("demo").innerHTML="not prime";
    }
}}
