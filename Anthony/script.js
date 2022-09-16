const number= document.getElementById("number");
const submit = document.getElementById("submit");
const body = document.querySelector("body");
const h2 = document.querySelector("h2");
const h3 = document.querySelector("h3");
const lists = document.createElement("ul");
body.appendChild(lists);
const list =[]
body.style.position = 'relative';




leapYear = () =>{
    let leap = [];
    let leapInt = 2000;
    const leapDiff = 2024-2000;
    const leapy = leapDiff/4;

    for(i=0; i<leapy; i++){
        leapInt += 4;
        leap.push(leapInt);

        list.push(document.createElement("li"));
        list[i].textContent = leapInt;
        lists.appendChild(list[i]);
    }
}

change=(e)=>{
    e.preventDefault();
    let x = number.value;
    if(x<=10){
        body.style.backgroundColor = 'gold';
    } else if(x>10 && x<=20){
        body.style.backgroundColor = 'red';
    } else if(x>20 && x<=30){
        body.style.backgroundColor = 'blue';
    }else if(x>30 && x<=40){
        body.style.backgroundColor = 'lime';
    }else if(x>40 && x<=50){
        h2.textContent = 'I Love You Benita Michael';
        h2.setAttribute("class", "plain");
    } else if(x>50 && x<=60){
        submit.setAttribute("class", "rotate");
    }else if(x>60 && x<=70){
        setInterval(() => {
            leapYear()
        }, 2000);
    }
    else {
        h3.textContent = 'Please enter a valid number not greater than 50';
         h3.setAttribute("class", "plain");
    }
    let top = Math.floor(Math.random() * 100)+1;
    let left = Math.floor(Math.random() * 100)+1;

        
    number.style.position = 'absolute';
    number.style.top = `${top}%`;
    number.style.left = `${left}%`;

}

submit.addEventListener("click", change);