    //where results should be showen
    let MobileResultPlace = document.getElementById("mobileResult")


    //get browser information
    let browserInfo = new BrowserType();

    let mobileResult=browserInfo.mobile;

    //showing result
    showMobileResult(mobileResult, MobileResultPlace);




    function showMobileResult(mobileResult, MobileResultPlace) {
      let mobilePanel = document.getElementById("mobilePanel");
      if (!mobileResult) {
        MobileResultPlace.innerHTML =
          "You are using PC or tablet<br />Test passed";
          mobilePanel.setAttribute("class", "panel panel-primary");
          TestPassed();
      } else {
        MobileResultPlace.innerHTML = "You are using a mobile phone.<br />Mobiles are not allowed";
        mobilePanel.setAttribute("class", "panel panel-danger");
        TestFailed();
      }
    }