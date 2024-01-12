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
        result.innerHTML = (username1 + " vince!");
    } if (userNumber < cpuNumber) {
        result.innerHTML = (username2 + " vince!");
    } else if (userNumber == cpuNumber) {
        result.innerHTML = ("Pareggio!");
    }
    
    if (userNumber == 1) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-1"></i>
            </div>
        ` 
    } if (userNumber == 2) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-2"></i>
            </div>
        ` 
    } if (userNumber == 3) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-3"></i>
            </div>
        ` 
    } if (userNumber == 4) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-4"></i>
            </div>
        ` 
    } if (userNumber == 5) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-5"></i>
            </div>
        ` 
    } if (userNumber == 6) {
        userDice.innerHTML = `
            <div>
                <i class="bi bi-dice-6"></i>
            </div>
        ` 
    }

    if (cpuNumber == 1) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-1"></i>
            </div>
        ` 
    } if (cpuNumber == 2) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-2"></i>
            </div>
        ` 
    } if (cpuNumber == 3) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-3"></i>
            </div>
        ` 
    } if (cpuNumber == 4) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-4"></i>
            </div>
        ` 
    } if (cpuNumber == 5) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-5"></i>
            </div>
        ` 
    } if (cpuNumber == 6) {
        cpuDice.innerHTML = `
            <div>
                <i class="bi bi-dice-6"></i>
            </div>
        ` 
    }
})

