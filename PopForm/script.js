const options = document.querySelector("#options");
const popUpDiv = document.getElementById("popUp");

const signUp = document.getElementById("signUp");
const popUp = document.createElement('form')
popUp.setAttribute('class', 'pop-up');
popUpDiv.appendChild(popUp);

signUp.addEventListener("click", ()=>{
    const divs = [];
    const inputs = [];
    for(let i =0; i<4; i++){
        divs.push(document.createElement('div'));
        inputs.push(document.createElement('input'));
        popUp.appendChild(divs[i]);
        divs[i].appendChild(inputs[i]);
    }
    inputs[0].setAttribute('type', 'text');
    inputs[0].setAttribute('placeholder', 'Enter Full Name');

    inputs[1].setAttribute('type', 'email');
    inputs[1].setAttribute('placeholder', 'Enter Email');

    inputs[2].setAttribute('type', 'password');
    inputs[2].setAttribute('placeholder', 'Enter Password');

    inputs[3].setAttribute('type', 'submit');
    inputs[3].setAttribute('value', 'Create Account');
})