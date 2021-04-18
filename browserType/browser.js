class BrowserType {
    constructor() {
        // OS
        this.operatingSystem=navigator.platform;
        // general info
        this.general=window.navigator.userAgent;
        //check if firefox 
        this.firefox = typeof(InstallTrigger)!="undefined"? true : false;
        //check if chrome
        this.chrome = !!window.chrome;

        //roataion
        this.rotaion=window.orientation;

        this.IE = false;
        this.edge = false;
        this.opera = false;
        this.safari = false;

    }

}