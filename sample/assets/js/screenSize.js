


// requested mindest width and height here
let reqWidth=30;

let reqHeight=15;
//where results should be showen
let resultPlace=document.getElementById("resultDevice")


let screenDim=getScreenSize();
let screenHeight=screenDim.height;
let screenWidth=screenDim.width;
//showing result

let pc=screenWidth>=reqWidth && screenHeight>reqHeight;
showResult(pc,resultPlace);



// show the result of the device type
function showResult(pc, resultPlace) {
  let panel = document.getElementById("panelDevice");
  resultPlace.innerHTML ="Screen size:" + screenHeight + "x" + screenWidth +"<br/> Width to height ratio: "+Math.round((screenWidth/screenHeight) * 100) / 100+"<br/>";
  if (pc) {
    resultPlace.innerHTML +="Your screen size is big enough to take part in this task <br />";
    panelDevice.setAttribute("class", "panel panel-primary");
    TestPassed();
  } else {
    resultPlace.innerHTML +=`You screen is too small<br />This Device is not allowed <br /> Requsted Height: ${reqHeight} Requsted Width: ${reqWidth}`;
    panelDevice.setAttribute("class", "panel panel-danger");
    TestFailed();
  }
}