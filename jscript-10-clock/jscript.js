function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      


   var s=359,m=255,h=125;


   var st = "rotate(6deg)";
  
  
function move()
{
    
   
    setInterval( function() { 
        var hour = document.getElementById("hour");
        var minute = document.getElementById("minutes");
        
        let second = document.querySelector('#seconds');
        var time = getSecondsSinceStartOfDay();
        console.log(time);
        second.style.msTransform = "rotate("+s+"deg)"; 
        // Standard syntax
        second.style.transform = "rotate("+s+"deg)"; 
        s+=1;
        if(s>=359){
            s=1;
            console.log("jjjjj");
            minutes.style.msTransform = "rotate("+m+"deg)"; 
            // Standard syntax
            minute.style.transform = "rotate("+m+"deg)"; 
            if(m>=359)
            {
                m+=20;
            hour.style.msTransform = "rotate("+h+"deg)"; 
            // Standard syntax
            hour.style.transform = "rotate("+h+"deg)"; 
            }
            if(h>=359)
            {
                h=1;
            }
       }
   
        console.log("hi");
    }, 1000);
    
     
       
       
       
   
   
    console.log("hi");

    }
   





   
move();