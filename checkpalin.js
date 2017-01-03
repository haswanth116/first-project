function myfunction(num){
   num=document.getElementById("num").value;
  var n=num;

  {
    var rev=0,r;

    while(n>=1)
    {
    r=n%10;
    rev=(rev*10)+r;
    n=n/10;
    n=Math.round(n);
    }
    if(rev==num){
    document.getElementById("demo").innerHTML="palindrome";
  }
  else{
    document.getElementById("demo").innerHTML="not palindrome";

  }

  }

}
