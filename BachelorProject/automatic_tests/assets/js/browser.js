    //where results should be showen
    let BrowserResultPlace = document.getElementById("BrowserResult")


    //get browser information
    let browserInfo_2 = new BrowserType();

    let chromeResult=browserInfo_2.chrome;
    let FirefoxResult=browserInfo_2.firefox;
    let IEResult=browserInfo_2.IE;
    //showing result
    showBrowserResult(chromeResult,FirefoxResult, IEResult,BrowserResultPlace);




    function showBrowserResult(chromeResult,FirefoxResult, IEResult,BrowserResultPlace) {
      let chrome=config.automatic_test.browser.chrome==chromeResult && config.automatic_test.browser.chrome==true;
      let firefox=config.automatic_test.browser.firefox==FirefoxResult && config.automatic_test.browser.firefox==true;
      let IE=config.automatic_test.browser.IE==IEResult && config.automatic_test.browser.IE==true;
      
      let BrowserPanel = document.getElementById("BrowserPanel");
      if (chrome || firefox || IE) {
        BrowserResultPlace.innerHTML =config.automatic_test.browser.success;
        BrowserPanel.setAttribute("class", "panel panel-primary");
          TestPassed();
      } else {
        BrowserResultPlace.innerHTML = config.automatic_test.browser.fail;
        BrowserPanel.setAttribute("class", "panel panel-danger");
        TestFailed();
      }
    }