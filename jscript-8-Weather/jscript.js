 

 
    
 
 
function change_weather(val) {
    var seli = document.getElementById('selection_o');
    var city_name = document.getElementById('city_name');
  
    if(val==1)
    {     alert("city Burbank");
        city_name.innerText="Burbank";
    }else if(val==2)
    {
        alert("city Chicago");
        city_name.innerText="Chicago";
    }else if(val==3)
    {
        alert("city Dallas");
        city_name.innerText="Dallas";
    }

}
function remove1()
{
    var cok=document.querySelector('.cookies');
    cok.style.display="none";
}
  var numc =[];
    var numf =[];

var counter =0;

function done()
{   var h4 = document.querySelectorAll('h4');
    var cel =true;
   
  
    var i=0;
     var seli = document.getElementById('selection_o');
     var val=seli.value;
     if(counter==0)
for( i=0;i<h4.length-1;i++)
{
    numc[i]=0;
    numf[i]=0;
    numc[i]=parseInt(h4[i].innerText).toFixed(2);
    numf[i]=parseInt(h4[i].innerText)+33.8;
    console.log(numf[i] );
    counter=1;
           
}  
   
    
    if((val=="f")  && cel==true)
    {
        cel=false;
        for( i=0;i<h4.length-1;i++)
        {
            
            h4[i].innerText=numf[i]+"°" ;             
        }
    }
    else 
    {
        for( i=0;i<h4.length-1;i++)
        {
          
            h4[i].innerText=numc[i]+"°";             
        }
        cel=true;
    }

}
  
