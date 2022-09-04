function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
setInterval( function() {
        var time = getSecondsSinceStartOfDay();
        console.log(time);
      // your code here
    }, 1000);

   var s=1,m=0,h=0;
function move()
{
    
    var st = "rotate(6deg)";
    var hour = document.getElementById("hour");
    var minutes = document.getElementById("minutes");
    var seconds = document.getElementById("seconds");
 
    
     
        console.log("hi");
        seconds.style.msTransform= "rotate("+s+"deg)"; ; 
        // Standard syntax
        seconds.style.transform = "rotate("+s+"deg)"; 
    s++;
    if(s>359){
         s=1;
    }

    console.log("hi");

    }
   





   
    setInterval(move());