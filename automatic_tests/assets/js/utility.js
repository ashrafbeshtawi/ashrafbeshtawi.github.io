// browser.js in needed to run this function


class screenDimensions {
    constructor(h,w) {
        this.height=h;
        this.width=w;
    }

}

function getScreenSize() {
    // getting screen dimensions 
    // get px in cm 
    let PX = document.createElement("DIV");
    document.body.appendChild(PX);
    PX.setAttribute("style", "width: 1cm; left: 100%; position: fixed; top: 100%;");
    let PxCm = PX.offsetWidth;


    // get screen width in px
    let w = screen.width;
    // get screen Height in px
    let h = screen.height;
    // Calculate height and width in cm
    let screenWidth = w / PxCm;
    let screenHeight = h / PxCm;


    //get browser information
    let browserInfo = new BrowserType();

    //calculating correction
    // if browser is firefox then the dimensions should be multiplied by the zoom level of the page
    let zoomCorrection = 1;
    if (browserInfo.firefox) {
        zoomCorrection = window.devicePixelRatio;
    }

    // correcting the values according to the zoom value
    screenWidth = Math.round(screenWidth * zoomCorrection);
    screenHeight = Math.round(screenHeight * zoomCorrection);


    return new screenDimensions(screenHeight,screenWidth);
}


class BrowserType {
    constructor() {
        // OS
        this.operatingSystem=navigator.platform;
        // general info
        this.mobile=window.navigator.userAgent.indexOf("Mobile")>=0?true:false;
        //check if firefox 
        this.firefox = typeof(InstallTrigger)!="undefined"? true : false;
        //check if chrome
        this.chrome = !!window.chrome;
        //check if Internet explorar
        this.IE = !!document.documentMode;
    }

}