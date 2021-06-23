    //where results should be showen
    let MobileResultPlace = document.getElementById("mobileResult")


    //get browser information
    let browserInfo = new BrowserType();

    let mobileResult=browserInfo.mobile;
    let pcResult=!mobileResult;
    //showing result
    showMobileResult(mobileResult,pcResult, MobileResultPlace);




    function showMobileResult(mobileResult,pcResult, MobileResultPlace) {
      let pass_test=config.automatic_test.device.pc==pcResult || config.automatic_test.device.mobile==mobileResult;
      let mobilePanel = document.getElementById("mobilePanel");
      if (pass_test) {
        MobileResultPlace.innerHTML =config.automatic_test.device.success;
          mobilePanel.setAttribute("class", "panel panel-primary");
          TestPassed();
      } else {
        MobileResultPlace.innerHTML = config.automatic_test.device.fail;
        mobilePanel.setAttribute("class", "panel panel-danger");
        TestFailed();
      }
    }