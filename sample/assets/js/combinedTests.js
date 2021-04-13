let Testpassed=0;

//to be called when test failed
function TestFailed(){
    CallBackAnyFailed();
}

//to be called when test is passed
function TestPassed(){
    Testpassed++;
    if(Testpassed==NumberOfTests){
        CallBackAllPassed();
    }
}