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