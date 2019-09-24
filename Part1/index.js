var board = [];

function play(clickedID){
    let playerSpan = document.getElementById("player");
    let clickedElement = document.getElementById(clickedID);
    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O'
        clickedElement.innerText = 'X'
        board[clickedID] = 'X';
    } else {
        playerSpan.innerText = 'X'
        clickedElement.innerText = 'O'
        board[clickedID] = 'O'
    }
    console.log(board);
let topRight = board[2];
let topLeft = board[0]
let topCenter = board [1];

let middleRight = board[5];
let middleLeft= board[3];
let middleCenter= board[4];

let bottomRight= board[8];
let bottomLeft= board[6];
let bottomCenter= board[7];

if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
    alert("player " + topRight + ' is the winner' )
    document.location.href=""
}
if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert("player " + middleLeft + ' is the winner' )
    document.location.href=""
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight){
    alert("player " + bottomLeft + ' is the winner' )
    document.location.href=""
}

if (topRight !== undefined && topRight === middleRight && topRight === bottomRight){
    alert("player " + topRight + ' is the winner' )
    document.location.href=""
}

if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft){
    alert("player " + topLeft + ' is the winner' )
    document.location.href=""
}

if (bottomRight !== undefined && bottomRight === middleRight && bottomRight === topRight){
    alert("player " + bottomRight + ' is the winner' )
    document.location.href=""
}
if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight){
    alert("player " + topLeft + ' is the winner' )
    document.location.href=""
}

if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert("player " + topRight + ' is the winner' )
    document.location.href=""
}

if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert("player " + topCenter + ' is the winner' )
    document.location.href=""
}




let boardFull = true;
for (let i= 0; i<=8 ; i++){
    if(board[i] ===undefined){
        boardFull =false;
    }
}
if (boardFull === true){
    alert("Cat's game, there is no winner");
    document.location.href=""
}


}

function reset(){
    document.getElementsByClassName("myButton")
    document.location.href=""

}





