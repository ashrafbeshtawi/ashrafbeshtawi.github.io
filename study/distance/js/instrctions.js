function readData(){
    let data="";
    let screen_height;
    let screen_width;
    //select all input fields
    let myInputs=document.getElementsByTagName("input");
    for( const element in myInputs){

        // if input field is empty
        if(!isNaN(element) && (myInputs[element].getAttribute("type")=="text" || myInputs[element].getAttribute("type")=="number") && myInputs[element].value.toString()==""){
            alert("Please answer all questions.")
            myInputs[element].focus();
            return;
        // if nor empty save data
        }else if(!isNaN(element) && (myInputs[element].getAttribute("type")=="text" || myInputs[element].getAttribute("type")=="number") && myInputs[element].value.toString()!=""){
            let name=myInputs[element].getAttribute("name");
            let value=myInputs[element].value;
            data=data+`${name}: ${value} \n`;

            //if screen height or width then save them to variables
            if(name=="screen height"){
                screen_height=value;
            }
            if(name=="screen width"){
                screen_width=value;
            }


        }
    }
    //select all radio buttons
    let myRadio=$("[type='radio']");
    let checked=false;
    for( const element in myRadio){
        //if one radio is checked the save the value of it
        if(!isNaN(element) && myRadio[element].checked){
            checked=true;
            let name=myRadio[element].getAttribute("name");
            let value=myRadio[element].getAttribute("value");
            data=data+`${name}: ${value} \n`;
        }

    }
    // if no radio box is checked then show alert
    if(!checked){
        alert("Please choose an answer for the color blindness question.")
        return;
    }
    // select all check boxes
    let myCheckbox=$("[type='checkbox']");
    for( const element in myCheckbox){
        if(!isNaN(element) && myCheckbox[element].checked){
            let name=myCheckbox[element].getAttribute("name");
            let value=myCheckbox[element].getAttribute("value");
            data=data+`${name}: ${value} \n`;
        }

    }    
    
    //saving screen height and width for other tasks
    localStorage.setItem('Exp_screen_width', screen_width);
    localStorage.setItem('Exp_screen_height', screen_height);
    //activating the next task button
    document.getElementById("nextTask").setAttribute("style","")

    downloadCSV(data);

}


function downloadCSV(data) {
    var filename, link;
    var csv = data;
    if (csv == null) return;

    filename = "task_0.csv";

    var blob = new Blob([csv], {type: "text/csv;charset=utf-8;"});

    if (navigator.msSaveBlob)
        { // IE 10+
            navigator.msSaveBlob(blob, filename)
        }else{
            var link = document.createElement("a");
            if (link.download !== undefined){
            // feature detection, Browsers that support HTML5 download attribute
                var url = URL.createObjectURL(blob);
                link.setAttribute("href", url);
                link.setAttribute("download", filename);
                link.style = "visibility:hidden";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
        }
}