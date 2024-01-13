const userDice = document.getElementById("user-dice");
const cpuDice = document.getElementById("cpu-dice");
const pull = document.getElementById("button");
const result = document.getElementById("result");
const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2");
const username1 = prompt("Nome giocatore 1");
const username2 = prompt("Nome giocatore 2");



pull.addEventListener('click', function() {
    const userNumber = Math.floor(Math.random() * 6 + 1);
    console.log(userNumber);
    const cpuNumber = Math.floor(Math.random() * 6 + 1);
    console.log(cpuNumber);
    
player1.innerHTML = username1;
player2.innerHTML = username2;

    if (userNumber > cpuNumber) {
        result.innerHTML = ("*" + username1 + " Vince!*");
    } if (userNumber < cpuNumber) {
        result.innerHTML = ("*" + username2 + " vince!*");
    } else if (userNumber == cpuNumber) {
        result.innerHTML = ("*Pareggio!*");
    }

    userDice.innerHTML = `
        <div class="bg-dice">
            <i class="bi bi-dice-${userNumber}-fill"></i>
        </div>
    `
    cpuDice.innerHTML = `
        <div class="bg-dice">
            <i class="bi bi-dice-${cpuNumber}-fill"></i>
        </div>
    `
})