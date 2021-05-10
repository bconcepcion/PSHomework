// DOM Elements

/*
Create game grid array, iterate through columns/rows to decide if they are full
if they are empty allow user to fill the cell. When you mouseover the top row it 
will set to the color of the current player.After every turn color of icon will change. 
Once a column is completely full stop players from being able to fill anymore cells. 
 Players will be able to reset game at any point during the game, after answering a 
 prompt to decide if they actually want to reset the game.

TODO: Coin flip to choose first player 
TODO: Allow players to choose the color of their  icon
TODO: If name contains profanity it will be invalid 
TODO: Additonal CSS styling + animation to declare winner
TODO: change music when game is over
TODO: Winner will also be announced using a pop up or modal


*/


//grab all cells excluding ghost row
const allCells = document.querySelectorAll('.cell:not(.row-top)'); 

const topCells = document.querySelectorAll('.cell.row-top');
const resetButton = document.querySelector('.reset');
const statusSpan = document.querySelector('.status');


// columns
const column0 = [allCells[35], allCells[28], allCells[21], allCells[14], allCells[7], allCells[0], topCells[0]];
const column1 = [allCells[36], allCells[29], allCells[22], allCells[15], allCells[8], allCells[1], topCells[1]];
const column2 = [allCells[37], allCells[30], allCells[23], allCells[16], allCells[9], allCells[2], topCells[2]];
const column3 = [allCells[38], allCells[31], allCells[24], allCells[17], allCells[10], allCells[3], topCells[3]];
const column4 = [allCells[39], allCells[32], allCells[25], allCells[18], allCells[11], allCells[4], topCells[4]];
const column5 = [allCells[40], allCells[33], allCells[26], allCells[19], allCells[12], allCells[5], topCells[5]];
const column6 = [allCells[41], allCells[34], allCells[27], allCells[20], allCells[13], allCells[6], topCells[6]];
const columns = [column0, column1, column2, column3, column4, column5, column6];
console.log(column0);

// row
const topRow = [topCells[0], topCells[1], topCells[2], topCells[3], topCells[4], topCells[5], topCells[6]];
const row0 = [allCells[0], allCells[1], allCells[2], allCells[3], allCells[4], allCells[5], allCells[6]];
const row1 = [allCells[7], allCells[8], allCells[9], allCells[10], allCells[11], allCells[12], allCells[13]];
const row2 = [allCells[14], allCells[15], allCells[16], allCells[17], allCells[18], allCells[19], allCells[20]];
const row3 = [allCells[21], allCells[22], allCells[23], allCells[24], allCells[25], allCells[26], allCells[27]];
const row4 = [allCells[28], allCells[29], allCells[30], allCells[31], allCells[32], allCells[33], allCells[34]];
const row5 = [allCells[35], allCells[36], allCells[37], allCells[38], allCells[39], allCells[40], allCells[41]];
const rows = [row0, row1, row2, row3, row4, row5, topRow];

//variables 

let gameIsLive = true; 
//tells whether game is on or not
//when someone wins it sets to false to stop the game
let yellowIsNext = true; 
//if this is true it will be yellows turn
//if false it will be reds turn


let playerTwo = document.getElementById("playerSelector2").value

//submit buttons
const playerOneSubmit = document.getElementById("playerOneSubmit");
const playerTwoSubmit = document.getElementById("playerTwoSubmit");
const modal = document.getElementById("playersModal");



//functions 

//game music 

const backgroundMusic = () =>{

  let bgMusic = new Audio ('TC_ThemChanges.mp3')
  window.addEventListener("load", bgMusic.play())

}

//player select modal
const checkPlayerNames = () => {
  let playerOne = document.getElementById("playerSelector1").value
  let playerTwo = document.getElementById("playerSelector2").value
    window.addEventListener("load", () =>{
        const span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
    
    
        
        // close modal on click
        span.onclick = function() {
          if (playerOne !== "" && playerTwo !== 0)
          backgroundMusic();

          modal.style.display = "none";
        }
      
      

})
};

checkPlayerNames()

//player name submission

const playerSubmit = (event) => {
    event.preventDefault();
    let playerOne = document.getElementById("playerSelector1").value

    let playerTwo = document.getElementById("playerSelector2").value

    
    
    if (playerOne !== "" && playerTwo !== ""){

        document.getElementById("playerOne").innerHTML=`PLAYER 1: ${playerOne}`
        document.getElementById("playerTwo").innerHTML=`PLAYER 2: ${playerTwo}`
        modal.style.display = "none"
    }
   
}

 //coin sound    
const playAudio = () => {
  
  let audio = new Audio('coinSound.wav');
  audio.play();
      
}


//convert classlist to array
const getClassListArray = (cell) => {
    const classList = cell.classList;
    //spread op converts classList into an array
    return [...classList];
};

const getCellLocation = (cell) => {
    /*get classList array by storing the result of getClassListArray
    inside the classList variable
    */
    const classList = getClassListArray(cell);

    //loop thru classList and find values that include the row class
    const rowClass = classList.find(className => className.includes('row'));

    //loop thru classList and find values that include the col class
    const colClass = classList.find(className => className.includes('col'));


    /*extract index of cell from classListArray
    4 is in brackets bc the 5th char in the class shows 
    the index ie 'row-3'*/
    const rowIndex = rowClass[4];
    const colIndex = colClass[4];

    /*converts rowIndex/colIndex into an integer of base 10
    and returns it*/
    return [parseInt(rowIndex, 10),parseInt(colIndex, 10)];
};


//check if column is full
const getFirstOpenCellForColumn = (colIndex) => {
    const column = columns[colIndex];

    //slice every column except last element
    const columnWithoutTop = column.slice(0,6);

    //check if cell has red or yellow class. if it does its not open.
    for (const cell of columnWithoutTop) {
        const classList = getClassListArray(cell);
        if (!classList.includes('yellow') && (!classList.includes('red'))){

            return cell;
        }
    }
    return null; // if null column is full
};

//clear hover row
const clearColorFromTop = (colIndex) => {
    const topCell = topCells[colIndex];
    topCell.classList.remove('yellow');
    topCell.classList.remove('red');
}

//get color of cell
const getColorOfCell = (cell) => {
    const classList = getClassListArray(cell);
    if (classList.includes('yellow')) return 'yellow';
    if (classList.includes('red')) return 'red';
    return null;
}

const checkWinningCells = (cells) => {
    if (cells.length < 4) return false;
        gameIsLive = false;
        for (const cell of cells) { 
            cell.classList.add('win');
        }
        let playerOne = document.getElementById("playerSelector1").value

        let playerTwo = document.getElementById("playerSelector2").value


        statusSpan.textContent = `${yellowIsNext ? playerOne : playerTwo } has won! `

        return true;
    };




//event handling

const checkStatusOfGame = (cell) => {
    const color = getColorOfCell(cell);
    if (!color) return;
    const [rowIndex, colIndex] = getCellLocation(cell);
  
    // Check horizontally
    let winningCells = [cell];
    let rowToCheck = rowIndex;


    for(let colToCheck = colIndex -1; colToCheck >= 0; colToCheck-- ){
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
      }

    }

    for(let colToCheck = colIndex + 1; colToCheck <= 6; colToCheck++){
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
          winningCells.push(cellToCheck);
        }
    }

    let isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;
  
  
    // Check vertically
    winningCells = [cell];
    colToCheck = colIndex;

    for (rowToCheck = rowIndex - 1; rowToCheck >=0; rowToCheck --){
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
      }

    }

    for(let rowToCheck = rowIndex + 1; rowToCheck <= 5; rowToCheck ++){
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
      }

    }

    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;
  
  
    // Check diagonally /
    winningCells = [cell];
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck <= 5) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
        colToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
        colToCheck++;
      } else {
        break;
      }
    }
    isWinningCombo = checkWinningCells(winningCells);
    if (isWinningCombo) return;
  
  
    // Check diagonally \
    winningCells = [cell];
    rowToCheck = rowIndex - 1;
    colToCheck = colIndex - 1;
    while (colToCheck >= 0 && rowToCheck >= 0) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck--;
        colToCheck--;
      } else {
        break;
      }
    }
    rowToCheck = rowIndex + 1;
    colToCheck = colIndex + 1;
    while (colToCheck <= 6 && rowToCheck <= 5) {
      const cellToCheck = rows[rowToCheck][colToCheck];
      if (getColorOfCell(cellToCheck) === color) {
        winningCells.push(cellToCheck);
        rowToCheck++;
        colToCheck++;
      } else {
        break;
      }
    }
    if (isWinningCombo) return;

};



const handleCellMouseover = (e) => {
    //if game is over don't show hover
    if(!gameIsLive) return;

    const cell = e.target;
    //destructuring prop 
    const [rowIndex, colIndex] = getCellLocation(cell);

    const topCell = topCells[colIndex];
    topCell.classList.add(yellowIsNext ? 'yellow' : 'red'); 

};


const handleCellMouseout = (e) => {
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell)

    //if class of yellow or red exists it will remove it
    clearColorFromTop(colIndex);
};

//find first available cell within column and fill 
const handleCellClick = (e) => {
    //if game is over dont fill cell
    if(!gameIsLive) return;
    const cell = e.target;
    const [rowIndex, colIndex] = getCellLocation(cell);

    const openCell = getFirstOpenCellForColumn(colIndex);
    if (!openCell) {
        return;

    } else {
    openCell.classList.add(yellowIsNext ? 'yellow' : 'red');
    playAudio();
    checkStatusOfGame(openCell);
    
    //flipping color
    yellowIsNext = !yellowIsNext;
    clearColorFromTop(colIndex);

    }
    

    if (gameIsLive){
    //cell
    const topCell = topCells[colIndex];
    topCell.classList.add(yellowIsNext ? 'yellow' : 'red');
    


    }
};

//adding event listeners

//loop through event listeners
for (const row of rows){
    // console.log(row);
    //access each of the cells
    for(const cell of row){
        cell.addEventListener('mouseover', handleCellMouseover);
        cell.addEventListener('mouseout', handleCellMouseout);
        cell.addEventListener('click', handleCellClick);


    }
}




//reset + quit modal

resetButton.addEventListener ('click', () => {
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];


// if user clicks on the button open modal
  modal.style.display = "block";

// if user clicks on <span> (x) close modal
span.onclick = function() {
  modal.style.display = "none";
}

// if user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }

}
});



let yesYes = document.getElementById("Yes")

yesYes.addEventListener('click',() =>{
    const modal = document.getElementById("myModal");
    let playerOne = document.getElementById("playerSelector1")

    let playerTwo = document.getElementById("playerSelector2")

    modal.style.display = "none"
      for (const row of rows){
        for(const cell of row){
            cell.classList.remove('red');
            cell.classList.remove('yellow');
            cell.classList.remove('win');
        }
    }
    
    gameIsLive = true;
    yellowIsNext = true;
    statusSpan.textContent = '';
    checkPlayerNames();


} )


let noNo = document.getElementById("No")
noNo.addEventListener('click',() =>{
    const modal = document.getElementById("myModal");
    modal.style.display = "none"
      
    gameIsLive = true;
    yellowIsNext = true;

} )


