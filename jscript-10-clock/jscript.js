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
        console.log(s);
        second.style.msTransform = "rotate("+s+"deg)"; 
        // Standard syntax
        second.style.transform = "rotate("+s+"deg)"; 
        s+=1;
        if(s==360){
            m+=1;
            s=0;
            console.log("jjjjj");
            minutes.style.msTransform = "rotate("+m+"deg)"; 
            // Standard syntax
            minute.style.transform = "rotate("+m+"deg)"; 
            if(m>=360)
            {
                m=0;
                console.log(s);
                h+=1;
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
   
        console.log("hi");
    }, 1000);
    
     
       
       
       
   
   
    console.log("hi");

    }
   





   
move();