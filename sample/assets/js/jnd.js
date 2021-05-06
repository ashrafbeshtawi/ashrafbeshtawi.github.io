// this script generate and validates the JND in the quality assessment task


//reading configs for distance (blur)

//format and path
let format_blur_questions=config.blur.format;
let path_blur_questions=config.blur.path;


//select target html element
let target_blur_questions=document.getElementById("JND_distance");
let ALL_SNR=config.blur.snr_pairs;

for (let index = 0; index < ALL_SNR.length; index++) {
    // detecting the correct answer
    let current_correct_answer;
    if (ALL_SNR[index][0]>ALL_SNR[index][1]){
        current_correct_answer=1;
    }else if(ALL_SNR[index][0]<ALL_SNR[index][1]){
        current_correct_answer=2;
    }else{
        current_correct_answer=3;
    }

    target_blur_questions.innerHTML+= getDistanceQuestion(ALL_SNR[index][0],ALL_SNR[index][1],index+1,current_correct_answer); 
    
}


function getDistanceQuestion(snr1,snr2,question_number,correct_answer) {
return  `
<span>Debug Info: SNR: ${snr1},${snr2} Correct Answer: ${correct_answer}</span> <br>
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
    <div class="question" id="blur_${question_number}" correct="${correct_answer}">
        <div class="radio_question">
            <input type="radio" id="blur_${question_number}_first" name="blur_${question_number}_first" value="first">
            <label  for="blur_${question_number}_first"> &nbsp; Quality of Image A is better.</label>
        </div>

        <div class="radio_question">
        <input type="radio" id="blur_${question_number}_second" name="blur_${question_number}_second" value="second">
        <label  for="blur_${question_number}_second" >&nbsp;Quality of Image B is better.</label>
        </div>
        <div class="radio_question">
        <input type="radio" id="blur_${question_number}_undetectable" name="blur_${question_number}_undetectable" value="undetectable">
        <label for="blur_${question_number}_undetectable" >&nbsp; Difference is not detectable.</label>
        </div>
    </div>
</div>
`;
}