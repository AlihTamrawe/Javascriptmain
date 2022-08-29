function fuzzbizz( n)
{
    var x=n;
    if(x>0){
    for(var i=1;i<=x;i++)
    {
        if((i%3==0)&&(i%5==0))
        {
            console.log("FizzBuzz");
        } 
       else
        if(i%5==0)
        {
            console.log("Buzz");
        }
        else
        if(i%3==0)
        {
            console.log("Fizz");
        }
         else
        {
            console.log(i);
        }
       
    }
}
else
        {
            console.log("out of posiytive range");
        }
}
fuzzbizz(15); 

fuzzbizz(1);
