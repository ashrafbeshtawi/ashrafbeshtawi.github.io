//where results should be showen
let resultPlace=document.getElementById("resultDevice")

// getting screen dimensions (working on it)
// get px in cm 
let PxCm=document.getElementById("dpi").offsetWidth;


// get screen width in px
let w=screen.width;
// get screen Height in px
let h=screen.height;
// Calculate height and width in cm
let screenWidth=w/PxCm;
let screenHeight=h/PxCm;



// correction (might come to use later)
let correction=0
screenWidth=Math.round(screenWidth-correction*screenWidth)-3;
screenHeight=Math.round(screenHeight-correction*screenHeight)-3;

//showing result
let pc=screenWidth>screenHeight && screenWidth>30;
showResult(pc,resultPlace);




function showResult(pc,resultPlace){
  let panel=document.getElementById("panelDevice");
  if(pc){
    resultPlace.innerHTML="You are accessing this page with a wide-screen device (Laptop, PC, Notebook)<br />This Device is allowed";
    panelDevice.setAttribute("class","panel panel-primary");
  }else{
    resultPlace.innerHTML="You are accessing this page with a mobile phone<br />This Device is not allowed";
    panelDevice.setAttribute("class","panel panel-danger");    
  }
}