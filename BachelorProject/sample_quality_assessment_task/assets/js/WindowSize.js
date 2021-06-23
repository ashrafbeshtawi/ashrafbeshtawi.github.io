    //where results should be showen
    let windowResultPlace = document.getElementById("windowSizeResult")




    // get screen width in px
    let wZoom = screen.width;
    // get screen Height in px
    let hZoom = screen.height;

    // get window inner Width in px
    let wiZoom = window.innerWidth;
    // get window inner Height in px
    let hiZoom = window.innerHeight;


    // check if numTest if in the range of numsource within the toleance percentage
    // tolrance percentage as integer between [0,1] 
    function inRange(numTest,numSource,toleracePercent){
        // different between source and test
        diff=Math.abs(numSource-numTest);
        // calculate the maximum allowed difference
        maxDiff=Math.abs(numSource*toleracePercent);
        if (diff<= maxDiff){

            return true
        }
        return false

    }

    //showing result
    let windowResult;
    if(config.automatic_test.window.maximized){
      windowResult=inRange(wZoom,wiZoom,0.1) && inRange(hZoom,hiZoom,0.1)
    }else{
      //if the window does not have to be maximized the automaticly pass the test
      windowResult=true
    }

    showZoomResult(windowResult, windowResultPlace);




    function showZoomResult(zoomResult, resultPlace) {
      let zoomPanel = document.getElementById("windowSizePanel");
      if (zoomResult) {
        resultPlace.innerHTML =config.automatic_test.window.success;
          zoomPanel.setAttribute("class", "panel panel-primary");
          TestPassed();
      } else {
        resultPlace.innerHTML = config.automatic_test.window.fail;
        zoomPanel.setAttribute("class", "panel panel-danger");
        TestFailed();
      }
    }