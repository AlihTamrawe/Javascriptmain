function turnOff(element) {
    if(element.innerText=="On")
    element.innerText = "Off";
    else
    if(element.innerText=="Off")
    {
        element.innerText = "On";
    }
    
}
function logun(element)
{
    if(element.innerText=="Login"){
    element.innerText="LogOff";
} else if(element.innerText=="LogOff")
    {
        element.innerText="Login";
    }
     
}
var x=0;
function Like(element)
{
   x++;

    element.innerText=x+"Likes";

}
function hide(element) {
    element.remove();
}