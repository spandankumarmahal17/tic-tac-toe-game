const boxs = document.querySelectorAll(".box");
const status = document.getElementById("status");
const resetButton = document.getElementById("reset");

let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];

function checkWinner() {
    for (let combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            status.textContent = `Player ${board[a]} wins!`;
            gameActive = false;
            return;
        }
    }

    if (!board.includes("")) {
        status.textContent = "It's a draw!";
        gameActive = false;
    }
}

boxs.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (board[index] === "" && gameActive) {
            board[index] = currentPlayer;
            box.textContent = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            if (gameActive) status.textContent = `Player ${currentPlayer}'s turn`;
        }
    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    status.textContent = "Player X's turn";
    boxs.forEach(box => box.textContent = "");
});
