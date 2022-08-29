
function odds( n)
{
    var x=n;
    if(x>0){
        console.log("odd numbers between"+1+" to "+x);
    for(var i=1;i<=x;i++)
    {
        if(i%2==1)
        console.log(i);
    }
}
else
        {
            console.log("out of positive range");
        }
}
odds(12);
/*-------------1---------------------*/

function decreaseby3(n){
    var x=n;
    if(x>0){
        for(var i=1;i<=x;i-3)
        {
           
            console.log(i);
        }
    }
    else
            {
                console.log("out of positive range");
            }
}

    decreaseby3(100);
/*------------------2-----------------------------*/

function turnoff(element)
{
    element.innerHtml="off";
}


function sequance(n){
    var x=4;
    if(n>0){
        for(var i=1;i<=n;i++)
        {
           
            console.log(x);
            x=x-1.5;
        }
    }
    else
            {
                console.log("out of positive range");
            }
}

sequance(5);


/*--------------------3---------------------------*/


function Sigma(n){
    var sum=0;
    var s="";
    if(n>0){
        for(var i=1;i<=n;i++)
        {
           
            sum=sum+i;
            s=s+i+"+";
        }
    }
    else
            {
                console.log("out of positive range");
            }
            console.log("Siqma is :"+s+"=");
            console.log(sum);

}
Sigma(100);

/*------------------4-----------------------------*/


function Factorial(n){
    var sum=1;
    var s="";
    if(n>0){
        for(var i=1;i<=n;i++)
        {
           
            sum=sum*i;
            s=s+i+"*";
        }
    }
    else
            {
                console.log("out of positive range");
            }
            console.log("Siqma is :"+s+"=");
            console.log(sum);

}
Factorial(12);


/*---------------------5--------------------------*/