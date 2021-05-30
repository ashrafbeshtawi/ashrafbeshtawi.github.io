// this script generate and validates the JND in the quality assessment task


//reading configs for distance (blur)
//format and path
let format_blur_questions=config.blur.format;
let path_blur_questions=config.blur.path;
//the perctnage of correct answers requested to pass the blur test
let correct_answers_requested=config.blur.correct_answers_requested;

//select target html element
let target_blur_questions=document.getElementById("JND_distance");

//check if the test was passed 
let jnd_distance_cookies=readCookie(config.cookieName+"_jnd_distance");

//if the test was not done before or result expired
if(jnd_distance_cookies!=null){
    document.getElementById("jnd_distance_whole").setAttribute("style","display:none;");
    document.getElementById("jnd_distance_result").setAttribute("value","true");
}else{
    
    let ALL_SNR=config.blur.snr_pairs;
        //adding the questions
    for (let index = 0; index < ALL_SNR.length; index++) {

        let first_image;
        let second_image;
        //shuffle images
        if(Math.floor(Math.random() * 2)==0){
            first_image=ALL_SNR[index][0];
            second_image=ALL_SNR[index][1];
        }else{
            first_image=ALL_SNR[index][1];
            second_image=ALL_SNR[index][0];
        }
        // detecting the correct answer
        let current_correct_answer;
        if (first_image>second_image){
            current_correct_answer=1;
        }else if(first_image<second_image){
            current_correct_answer=2;
        }else{
            current_correct_answer=3;
        }

        target_blur_questions.innerHTML+= getDistanceQuestion(first_image,second_image,index+1,current_correct_answer); 
        
    }
    //add the validation button
    target_blur_questions.innerHTML+= `
    <div class="center">
        <button id="blur_test_button" type="button" class="btn btn-primary" onclick="getValidationButton()">Validate The Answers</button>
    </div>
    `;
}













// validating the questions
function getValidationButton() {
    // total number of questions
    let q_num=config.blur.snr_pairs.length;
    let correct_answers=0;
    // loop over the questions
    for (let index = 0; index < q_num; index++) {
        //selecting a question
        const element = document.getElementById(`blur_${index+1}`);
        //get the correct answer
        const correct_answer=element.getAttribute("correct");
        //select the correct radio buttons
        
        //find the id of the correct radio
        let radio_id;
        if(correct_answer==1){
            radio_id="first";
        }else if(correct_answer==2){
            radio_id="second";
        }else{
            radio_id="third";
        }
        const radio_button=document.getElementById(`blur_${index+1}_${radio_id}`);

        // check if the correct answer is checked
        if(radio_button.checked){
            correct_answers++;
        }   
    }

    //deactivate the validation button
    document.getElementById("blur_test_button").disabled =true;
    // check 
    if(correct_answers>=correct_answers_requested){
        target_blur_questions.innerHTML+= `
            <div class="alert alert-success" role="alert">
            Test passed. Please continue
            </div>
        `;
        createCookie(config.cookieName+"_jnd_distance", "done", config.showSetupEveryMinutes);

    }else{
        target_blur_questions.innerHTML+= `
            <div class="alert alert-danger" role="alert">
            Test failed. Your distance from the screen should be ${config.blur.min_allowed_distance} to ${config.blur.max_allowed_distance} meters from the screen. <br>
            Please refresh the page and do the test again.
            </div>
        `
    }

    
}

// add the blur question
function getDistanceQuestion(snr1,snr2,question_number,correct_answer) {
console.log(`Blur test: Question ${question_number} Debug Info: SNR: ${snr1},${snr2} Correct Answer: ${correct_answer}`)
return  `
<div class="panel panel-info">
    <div class="panel-heading">${question_number}# Question</div>
    <div class="row_label">
        <div class="colom_label">
        <label> Image A</label> 
        </div>
        <div class="colom_label">
        <label> Image B</label> 
        </div>
    </div>

    <div class="row">
        <div class="colom">
        <img src="${path_blur_questions+"/"+snr1+"."+format_blur_questions}"  width="400" height="280">
        </div>
        <div class="colom">
        <img src="${path_blur_questions+"/"+snr2+"."+format_blur_questions}"  width="400" height="280">
        </div>
    </div>
    <div class="center" id="blur_${question_number}" correct="${correct_answer}">
        <div class="radio_question">
            <input type="radio" id="blur_${question_number}_first" name="blur_${question_number}" value="first">
            <label  for="blur_${question_number}_first"> &nbsp; Quality of Image A is better.</label>
        </div>

        <div class="radio_question">
        <input type="radio" id="blur_${question_number}_second" name="blur_${question_number}" value="second">
        <label  for="blur_${question_number}_second" >&nbsp;Quality of Image B is better.</label>
        </div>
        <div class="radio_question">
        <input type="radio" id="blur_${question_number}_undetectable" name="blur_${question_number}" value="undetectable">
        <label for="blur_${question_number}_undetectable" >&nbsp; Difference is not detectable.</label>
        </div>
    </div>
</div>
`;
}