    //where results should be showen
    let zoomResultPlace = document.getElementById("zoomResult")




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
    let zoomResult=inRange(wZoom,wiZoom,0.1) && inRange(hZoom,hiZoom,0.1)
    showZoomResult(zoomResult, zoomResultPlace);




    function showZoomResult(zoomResult, resultPlace) {
      let zoomPanel = document.getElementById("zoomPanel");
      if (zoomResult) {
        resultPlace.innerHTML =
          "The page is not zoomed in/out <br />Test passed";
          zoomPanel.setAttribute("class", "panel panel-primary");
          TestPassed();
      } else {
        resultPlace.innerHTML = "The page is zoomed in/out. This can affect your results in the task.<br />Please adjust your browser setting and try again";
        zoomPanel.setAttribute("class", "panel panel-danger");
        TestFailed();
      }
    }