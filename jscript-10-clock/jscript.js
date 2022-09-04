function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      


   var s=0,m=0,h=0;


   var st = "rotate(6deg)";
  
  
function move()
{
    
   
    setInterval( function() { 
        var hour = document.getElementById("hour");
        var minute = document.getElementById("minutes");
        
        let second = document.querySelector('#seconds');
        var time = getSecondsSinceStartOfDay();
        console.log("second : "+s/6);
        second.style.msTransform = "rotate("+s+"deg)"; 
        // Standard syntax
        second.style.transform = "rotate("+s+"deg)"; 
        s+=6;
        if(s==360){
            m+=6;
            s=0;
            console.log("minutesm : "+m/6);
            minutes.style.msTransform = "rotate("+m+"deg)"; 
            // Standard syntax
            minute.style.transform = "rotate("+m+"deg)"; 
            if(m>=360)
            {
                m=0;
                 
                h+=30;
            hour.style.msTransform = "rotate("+h+"deg)"; 
            // Standard syntax
            hour.style.transform = "rotate("+h+"deg)"; 
            }
            if(h>=359)
            {
                m=0;
                h=1;

            }
       }
   
     
    }, 1000);
    
     
       
       
       
   
   
  

    }
   





   
move();