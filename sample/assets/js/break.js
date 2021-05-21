const sessionLength=parseInt(1000*60*config.sessionMaxLength);
const breakLength=parseInt(1000*60*config.forcedBreak);
$("#maxTime").html(`${config.forcedBreak}`);
//starting first timeout for the first break
let mySession = setTimeout(TimeBreak, sessionLength);

//taking a break
function TimeBreak() {   
    //hiding the servey and showing break-message 
    $("#breakSection").show();
    $("#wholeServey").hide();  
    setTimeout(backToServey, breakLength);
}

//showing the servey
function backToServey() {   
    //hiding the servey and showing break-message 
    $("#breakSection").hide();
    $("#wholeServey").show();  
    setTimeout(TimeBreak, sessionLength);

}