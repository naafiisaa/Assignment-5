function changeBgColor() {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
}

let countIn = 23;
let countDe = 6;
let clickedButtons = new Set();

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
  button.addEventListener('click', function () {
    alert(`Board updated Successfully`);

    countIn++;
    document.getElementById('counterIncrease').textContent = countIn;

    countDe--;
    document.getElementById('counterDecrease').textContent = countDe;

    clickedButtons.add(this.id);

    if (clickedButtons.size === 6) {
      alert('Congrats!!! You have completed all the current task');
    }

    this.style.backgroundColor = "grey";
    this.disabled = true;
  });
});

const dateContainer = document.getElementById('todaysDate');

const today = new Date();
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const dayName = days[today.getDay()];
const date = today.getDate();
const month = months[today.getMonth()];
const year = today.getFullYear();

const fullDate = `${dayName}, ${date} ${month} ${year}`;
dateContainer.innerText = fullDate;


document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelectorAll('.clickedBtn');
  const texts = document.querySelectorAll('.printText');
  const outputDiv = document.querySelector('.output');
  const clearButton = document.querySelector('.clear-btn');

  btn.forEach((button, index) => {
    button.addEventListener('click', function () {
      const currentTime = new Date().toLocaleTimeString();


      const newEntry = document.createElement('div');
      newEntry.classList.add('log-entry');
      newEntry.innerHTML = `
        <p><strong>Task:</strong> ${texts[index].innerText}</p>
        <p><strong>Completed at:</strong> ${currentTime}</p>
      `;

      outputDiv.appendChild(newEntry);
    });
  });

  clearButton.addEventListener('click', function () {
    outputDiv.innerHTML = "";
  });
});
