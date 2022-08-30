/*function turnOff(element) {
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

function sub(element)
{
    if(element.innerText=="Subscribe"){
    element.innerText="UNSubscribe";
} else if(element.innerText=="UNSubscribe")
    {
        element.innerText="Subscribe";
    }
     
}
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
    

}*/

 var video = document.getElementById('myvid');
  function pla(element)
  {
    element.play();
  }
  function pu(element)
  { 
        
  element.pause();
  }
    function play1()
    {var video = document.getElementById('myvid');
        
    video.setAttribute("src", 'assets/ve1.mp4');
    video.autoplay = true;
    video.load();
     
    }
    function play2()
    {var video = document.getElementById('myvid');
            
    video.setAttribute("src", 'assets/ve2.mp4');
    video.autoplay = true;
    video.load();
       // document.getElementById('myvid').innerHTML="<source src='assets/ve2.mp4' type='video/mp4'>";
        
    }
    function play3()
    {
        var video = document.getElementById('myvid');
        video.setAttribute("src", 'assets/ve3.mp4');
        video.autoplay = true;
        video.load();
      //  document.getElementById('myvid').innerHTML="<source src='assets/ve3.mp4' type='video/mp4'>";
    }
    function play4()
    {
        var video = document.getElementById('myvid');
        video.setAttribute("src", 'assets/ve4.mp4');
        video.autoplay = true;
        video.load();
      //  document.getElementById('myvid').innerHTML="<source src='assets/ve4.mp4' type='video/mp4'>";
    }
    function play5()
    {
        var video = document.getElementById('myvid');
        video.setAttribute("src", 'assets/ve5.mp4');
        video.autoplay = true;
        video.load();
     //   document.getElementById('myvid').innerHTML="<source src='assets/ve5.mp4' type='video/mp4'>";
    }

