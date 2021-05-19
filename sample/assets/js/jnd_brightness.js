// this script generate and validates the JND in the quality assessment task


//reading configs for brightness
//format and path
let format_brightness_questions=config.brightness.format;
let path_brightness_questions=config.brightness.path;
//the perctnage of correct answers requested to pass the brightness test
let correct_answers_requested_brightness=config.brightness.correct_answers_requested;

//select target html element
let target_brightness_questions=document.getElementById("JND_brightness");

//check if the test was passed 
let jnd_brightness_cookies=readCookie("jnd_brightness");

//if the test was already done beofre and not expired yet then hide this test 
if(jnd_brightness_cookies!=null){
    document.getElementById("jnd_brightness_whole").setAttribute("style","display:none;");
}else{
    //the snr to be used to create the test
    let ALL_SNR=config.brightness.snr;
    // the numbers availabe in the sample
    let number_samples=config.brightness.num_array;
    //adding the questions
    for (let index = 0; index < ALL_SNR.length; index++) {
        // selecting number from the sample randomly
        let sample_num=number_samples[Math.floor(Math.random() * number_samples.length)];
        let current_correct_answer=sample_num;
        //converting the number to the filename format of the samples
        let image_name=`${ALL_SNR[index]}_${sample_num}`;

        target_brightness_questions.innerHTML+= getBrightnessQuestion(image_name,index+1,current_correct_answer); 
        
    }
    //add the validation button
    target_brightness_questions.innerHTML+= `
    <div class="question">
        <button id="brightness_test_button" type="button" class="btn btn-primary" onclick="getValidationButton_Brightness()">Validate The Answers</button>
    </div>
    `;
}













// validating the questions
function getValidationButton_Brightness() {
    // total number of questions
    let q_num=config.brightness.snr.length;
    let correct_answers=0;
    // loop over the questions
    for (let index = 0; index < q_num; index++) {
        //selecting a question
        const element = document.getElementById(`brightness_${index+1}`);
        //get the correct answer
        const correct_answer=element.getAttribute("correct");
        //select the textbox
        const text_box=document.getElementById(`brightness_${index+1}_${correct_answer}`);

        // check if the correct answer is checked
        if(text_box.value ==correct_answer){
            correct_answers++;
        }   
    }

    //deactivate the validation button
    document.getElementById("brightness_test_button").disabled =true;
    // check 
    if(correct_answers>=correct_answers_requested_brightness){
        target_brightness_questions.innerHTML+= `
            <div class="alert alert-success" role="alert">
            Test passed. Please continue
            </div>
        `;
        createCookie("jnd_brightness", "done", config.showSetupEveryMinutes);

    }else{
        target_brightness_questions.innerHTML+= `
            <div class="alert alert-danger" role="alert">
            Test failed. Your screen brightness is too low<br>
            Please adjest the screen brightness and refresh the page.
            </div>
        `
    }

    
}

// add the brightness question
function getBrightnessQuestion(img,question_number,correct_answer) {
console.log(`Brightness test: Question ${question_number} Debug Info: SNR: ${img} Correct Answer: ${correct_answer}`)
return  `
<div class="panel panel-info">
    <div class="panel-heading">${question_number}# Question</div>
    <div class="row_label">
        <div class="colom_label">
        <label> Image A</label> 
        </div>
    </div>

    <div class="row">
        <div class="colom">
        <img src="${path_brightness_questions+"/"+img+"."+format_brightness_questions}"  width="500" height="500">
        </div>
    </div>
    <div class="question" id="brightness_${question_number}" correct="${correct_answer}">
        <div class="input_question">
            <label  for="brightness_${question_number}_${correct_answer}"> &nbsp; The Number: </label>
            <input type="number" class="form-control" id="brightness_${question_number}_${correct_answer}" name="brightness_${question_number}_${correct_answer}" value="">
        </div>
    </div>
</div>
`;
}