console.log("page loaded...");


function change_pic(){
        var pic=document.querySelector("#pic-change");
        pic.innerText="Ali Tamrawe"
} 


var log = true;

function hide_main(element)
{ 
    var main_log = document.querySelector('.main');
    if(log==true){
        alert("hiii")
    element.innerText="sign in";
    main_log.style.display = "none";
    log=false;
}else {
    element.innertext="sign out";
    main_log.style.display = "flex";
    log=true;
}



}
var c =2;
var c2=500;
function add_conn(e)
{
    var show_profile = document.querySelector('.prof1');
    var show_profile2 = document.querySelector('.prof2');
    var conn = document.querySelector('.b1');
    var vconn = document.querySelector('.b2')
    if(e==1){
    c--;
    c2++;
    conn.innerText=c;
    vconn.innerText=c2;
    show_profile.remove()
        }else
        {
            c--;
    conn.innerText=c;
    c2++;
    vconn.innerText=c2;
    show_profile2.remove()
        }

}
function remove_conn(e)
{
    var show_profile = document.querySelector('.prof1');
    var show_profile2 = document.querySelector('.prof2');
    var conn = document.querySelector('.b1');
    var vconn = document.querySelector('.b2')
    if(e==1){
    c--;
    conn.innerText=c;
    show_profile.remove()
        }else
        {
            c--;
    conn.innerText=c;
    show_profile2.remove()
        }

}