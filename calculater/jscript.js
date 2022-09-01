
var operator = "";
var h ="0";
var num1 = "";
var num2 = "";
var flag=0;

function setOP(op)
{
    var displayDiv = document.querySelector("#display");
    operator=op;
    flag=1;
   // displayDiv.innerText=h;
}
function press(x)
{
    var displayDiv = document.querySelector("#display");
    if(flag==0)
    {
        num1+=x;
        console.log(num1);
        displayDiv.innerText=num1;
    }
    else{
        num2+=x;
        displayDiv.innerText=num2;
    }
}

function calculate(){
   
        var result=0.0; 
         var displayDiv = document.querySelector("#display");
    if(operator=='/')
    {
        if(parseFloat(num1)!=null||parseFloat(num2)!=null){
        result=parseFloat(num1)/parseFloat(num2);
        displayDiv.innerText =result;
    }
    else
    {
        alert("entered zero")
    }
    }else if(operator=='*'){
        if(parseFloat(num1)!=null||parseFloat(num2)!=null){
            result=parseFloat(num1)*parseFloat(num2);
            displayDiv.innerText =result;
        }
        else
        {
            alert("entered zero")
        }
       

    }else if(operator=='-')
    {
        
        result=parseFloat(num1)-parseFloat(num2);
        displayDiv.innerText =result;

    }else if(operator=='+'){
        
        result=parseFloat(num1)+parseFloat(num2);
        displayDiv.innerText =result;

    }
    
}
 function clr()
 {
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText='0';
    num1="";
    num2="";
    flag=0;
 }

