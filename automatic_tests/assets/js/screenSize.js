


// requested mindest width and height here
let reqWidth=config.automatic_test.dimensions.required_width;

let reqHeight=config.automatic_test.dimensions.required_height;
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
  if (pc) {
    resultPlace.innerHTML +=config.automatic_test.dimensions.success;
    panelDevice.setAttribute("class", "panel panel-primary");
    TestPassed();
  } else {
    resultPlace.innerHTML +=config.automatic_test.dimensions.fail;
    panelDevice.setAttribute("class", "panel panel-danger");
    TestFailed();
  }
}