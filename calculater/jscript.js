
var operator = "";
 
var First_number = "";
var Second_number = "";
var switcheflag=0;

function setOP(operantes)
{
    var displayDiv = document.querySelector("#display");
    operator=operantes;
    switcheflag=1;
   // displayDiv.innerText=h;
}


function press(x)
{
    var displayDiv = document.querySelector("#display");
    if(switcheflag==0)
    {
        First_number+=x;
        console.log(First_number);
        displayDiv.innerText=First_number;
    }
    else{
        Second_number+=x;
        displayDiv.innerText=Second_number;
    }
}

function calculate(){
   
        var result=0.0; 
         var displayDiv = document.querySelector("#display");
    if(operator=='/')
    {
        if(parseFloat(First_number)!=null||parseFloat(Second_number)!=null){
        result=parseFloat(First_number)/parseFloat(Second_number);
        displayDiv.innerText =result;
    }
    else
    {
        alert("entered zero")
    }
    }else if(operator=='*'){
        if(parseFloat(First_number)!=null||parseFloat(Second_number)!=null){
            result=parseFloat(First_number)*parseFloat(Second_number);
            displayDiv.innerText =result;
        }
        else
        {
            alert("entered zero")
        }
       

    }else if(operator=='-')
    {
        
        result=parseFloat(First_number)-parseFloat(Second_number);
        displayDiv.innerText =result;

    }else if(operator=='+'){
        
        result=parseFloat(First_number)+parseFloat(Second_number);
        displayDiv.innerText =result;

    }
    
}
 function clr()
 {
    var displayDiv = document.querySelector("#display");
    displayDiv.innerText='0';
    First_number="";
    Second_number="";
    switcheflag=0;
 }

