let countIn = 23;
let countDe = 6;
let clickedButtons = new Set();

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        alert(`Board updated Successfully`);
        
        countIn++;
        document.getElementById('counterIncrease').textContent = countIn;

        countDe--;
        document.getElementById('counterDecrease').textContent = countDe;

        clickedButtons.add(this.id);

        if (clickedButtons.size === 6){
            alert('Congrats!!! You have completed all the current task');
        }

        this.style.backgroundColor = "grey";
        this.disabled = true;

    })
})

///



document.addEventListener('DOMContentLoaded', function(){
    let btn = document.querySelectorAll('.clickedBtn');
    let texts = document.querySelectorAll('.printText');
    let outputDiv = document.querySelector('.output');
    let clearButton = document.querySelector('.clear-btn');

    btn.forEach((button, index) => {
        button.addEventListener('click', function(){
            let currentTime = new Date().toLocaleTimeString();
            outputDiv.innerHTML += `<p>You have completed the task ${texts[index]. innerText} at :${currentTime}</p>`;
        })
    })

    clearButton.addEventListener('click', function(){
        outputDiv.innerHTML = "";
    })
})