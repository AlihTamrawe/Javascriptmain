
var x=0;
function Like(element)
{
   x++;
        alert("the ninja was clicked :"+x);
    element.innerText=x+"Likes";

}
var d=0;
function Likes(element)
{
   d++;
        alert("the ninja was clicked :"+d);
    element.innerText=d+"Likes";

}
function hide(element) {
    element.remove();
    setTimeout(1000);
    

}
function phcan()
{
    var c = document.getElementById('k2');
        c.setAttribute(src,'todd-s.jpg');
}