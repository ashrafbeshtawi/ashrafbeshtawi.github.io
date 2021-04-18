function isMaximazed() {
    // get screen width in px
    let w = screen.width;
    // get screen Height in px
    let h = screen.height;

    // get window inner Width in px
    let wi = window.innerWidth;
    // get window inner Height in px
    let hi = window.innerHeight;

    //showing result
    let zoomResult = inRange(w, wi, 0.1) && inRange(h, hi, 0.1)

    return zoomResult;
}




// check if numTest if in the range of numsource within the toleance percentage
// tolrance percentage as integer between [0,1] 
function inRange(numTest, numSource, toleracePercent) {
    // different between source and test
    diff = Math.abs(numSource - numTest);
    // calculate the maximum allowed difference
    maxDiff = Math.abs(numSource * toleracePercent);
    if (diff <= maxDiff) {
        return true
    }
    return false

}