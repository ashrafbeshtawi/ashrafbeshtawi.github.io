let hide_show_header=document.getElementById("toggleHeader");
hide_show_header.onclick=test;


let hidden=0;

function test(){
    let header=document.getElementsByClassName("header")[0];
    if(hidden){
        header.setAttribute("style","");
        hide_show_header.innerHTML="Hide the header"
        hidden=0;
    }else{

        header.setAttribute("style","height:0%;opacity:0; transition:1s");
        setTimeout(function(){ header.setAttribute("style","display:none")}, 1000);
        hide_show_header.innerHTML="Show the header"
        hidden=1;
    }
}
//hide_show_header.setAttribute("style","display:none");