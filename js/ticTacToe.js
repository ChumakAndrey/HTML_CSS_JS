//on click make a step
document.getElementById("gameZone").onclick = function (ev) {
       if (ev.srcElement.textContent === "") {
            ev.srcElement.textContent = "X";
            checkWinner("X");
            //make PC random step
            makeRandomStep();
            checkWinner("0");
        } else {
        console.log("PLease, click on empty cell...");
        alert("PLease, click empty cell...");
        }
}



function makeRandomStep() {
    var cells = document.getElementById("gameZone").getElementsByTagName("td");
    var emptyCells = [];
    for(var i = 0; i < cells.length; i++) {
        if (cells[i].innerText === ""){
            console.log("empty cell id: " + i);
            emptyCells.push(i);
        }
    }
    var random = Math.floor(Math.random() * (emptyCells.length));
    cells[emptyCells[random]].innerText = "0";
}

function checkWinner(playerSign) {
    //check horizontals
    var winMessage = "Win player with " + playerSign + "!!";
    var rows = document.getElementById("gameZone").getElementsByTagName("tr");
    for (var i = 0; i < rows.length; i++) {
        if (rows[i].innerText === "X\tX\tX" && playerSign === "X") {
            displayWinner();
            break;
        }
        if (rows[i].innerText === "0\t0\t0" && playerSign === "0") {
            displayWinner();
            break;
        }
    }

    //check verticals
    var cells = document.getElementById("gameZone").getElementsByTagName("td");
    if (cells[1].innerText === playerSign && cells[4].innerText === playerSign && cells[7].innerText === playerSign) {
        displayWinner();
    }
    if (cells[0].innerText === playerSign && cells[3].innerText === playerSign && cells[6].innerText === playerSign) {
        displayWinner();
    }
    if (cells[2].innerText === playerSign && cells[5].innerText === playerSign && cells[8].innerText === playerSign) {
        displayWinner();
    }

    //check diagonals
    if (cells[0].innerText === playerSign && cells[4].innerText === playerSign && cells[8].innerText === playerSign) {
        displayWinner();
    }
    if (cells[2].innerText === playerSign && cells[4].innerText === playerSign && cells[6].innerText === playerSign) {
        displayWinner();
    }

    function displayWinner() {
        console.log(winMessage);
        alert(winMessage);
    }
}
/*
012
345
678*/
