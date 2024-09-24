document.addEventListener('DOMContentLoaded', function () {
    const gridContainer = document.getElementById('gridContainer');
    let currentPlayer = 'X';
    let moves = 0;
    let gameBoard = ['', '', '', '', '', '', '', '', ''];
    let gameOver = false;
  
  
    for (let i = 1; i <= 9; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('row');
      gridElement.id = i;
      gridElement.addEventListener('click', () => makeMove(i));
      gridContainer.appendChild(gridElement);
    }
  
    function makeMove(index) {
      if (!gameOver && gameBoard[index - 1] === '') {
        gameBoard[index - 1] = currentPlayer;
        document.getElementById(index).textContent = currentPlayer;
        moves++;
  
        if (checkWinner()) {
          alert(`Congratulations! ${currentPlayer} wins.`);
          gameOver = true;
        } else if (moves === 9) {
          alert('Draw! The match is drawn.');
          gameOver = true;
        } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
      }
    }
  
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
      ];
  
      for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
          return true;
        }
      }
  
      return false;
    }
  });