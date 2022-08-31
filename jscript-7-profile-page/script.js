console.log("page loaded...");


function change_pic(){
        var pic=document.querySelector("#pic-change");
        pic.src="images/anne-s.jpg";
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
var c_string;
function add_conn()
{
    var conn = document.querySelector('.badge');
    c--;
    c_string+=c;
    conn.innerText=c_string;
}