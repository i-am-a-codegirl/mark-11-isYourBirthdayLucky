const birthDate = document.querySelector(".dob");
const luckyNumber = document.querySelector(".lucky-no");
const checkBtn = document.querySelector(".check-button");
const resultField = document.querySelector(".result");

checkBtn.addEventListener("click", function isYourBirthdayLucky() {
 
    const dateOfBirth = birthDate.value;


  checkBirthDateLucky(dateOfBirth);

});

function checkBirthDateLucky(dateOfBirth){

dateOfBirth = dateOfBirth.replaceAll("-","");
const dobSum = birthSum(dateOfBirth);
if(dobSum&&luckyNumber.value){
calculateLucky(dobSum, luckyNumber.value);
}
else{
    resultField.innerText = "please enter both the fields👿"
}
}


function birthSum(dateOfBirth){
let sum = 0;

    for(let i = 0; i< dateOfBirth.length; i++){
        
    sum = sum + dateOfBirth.charAt(i);
    }
    
    return sum;
}

function calculateLucky(dobSum, luckyno){

if(dobSum%luckyno===0){
    resultField.innerText = "Wohho! Your birthday is lucky 🚀";
}
else{
    resultField.innerText = "oops! your birthday is not so lucky 😟";
}

}

