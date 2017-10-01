let tilesArr = [0,1,2,3,4,5,6,7,8];
let newTile = 0;
var moves = 0;
let x = document.getElementById("x");
let o = document.getElementById("o");
let wonLose = document.getElementById("wonLose");
let choose = document.getElementById("choose");
let board = document.getElementById("board");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let b1 = document.getElementById("b1");
let b2 = document.getElementById("b2");
let b3 = document.getElementById("b3");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");
let tiles = document.querySelectorAll(".tiles");
let reset = document.getElementById("reset");
let youChoose = document.getElementById("youChoose");
let isItX;
let player;
let computer;

// x and o choose it
x.addEventListener("click", function(){
  youChoose.style.display = "block";
  youChoose.innerHTML = "Your choice is X";
  player = "X";
  computer = "O";
  board.style.display = 'block';
  reset.style.display = 'block';
  choose.style.display = "none";
});
o.addEventListener("click", function(){
  youChoose.style.display = "block";
  youChoose.innerHTML = "Your choice is O";
  player = "O";
  computer = "X";
  board.style.display = 'block';
  reset.style.display = 'block';
  choose.style.display = "none";
});

// reset button 
for(let i = 0; i < tiles.length; i++) {
  reset.addEventListener("click", function(){
    tilesArr = [0,1,2,3,4,5,6,7,8];
    moves = 0;
    tiles[i].innerHTML = "";
    choose.style.display = "block";
    board.style.display = 'none';
    reset.style.display = 'none';
    youChoose.style.display = "none";
    wonLose.style.display = "none";
  });
}

// main thing 
// program pocinje klikom igraca na polje, zatim se indeks niza polja prebacuje u varijablu newTile i  preko nje se brise tacan broj iz niza prethodnog napravljenog za kompjutersko random polje.Zatim se postupak ponavlja i za random kompjutersko polje.
for(let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function(){
    if(tiles[i].innerHTML === "") {
      tiles[i].innerHTML = player;
      newTile = 0;
      moves++;
      console.log(moves);
      newTile += i;
      var index = tilesArr.indexOf(newTile);
      if (index > -1) {
         tilesArr.splice(index, 1);
      }
      // console.log(tilesArr.length);
      if(moves < 9) {
        newTile = 0;
        var random = tilesArr[Math.floor(Math.random() * tilesArr.length)];
        tiles[random].innerHTML = computer;
        newTile += random;
        var randomIdx = tilesArr.indexOf(newTile);
        if (randomIdx > -1) {
           tilesArr.splice(randomIdx, 1);
        }
        // console.log(tilesArr, tilesArr.length);
        moves++;
        console.log(moves);
      }
      
    }
    //   who win or lose or draw
    if((tiles[0].innerHTML === player && tiles[1].innerHTML === player && tiles[2].innerHTML === player) || 
     (tiles[3].innerHTML === player && tiles[4].innerHTML === player && tiles[5].innerHTML === player) || 
     (tiles[6].innerHTML === player && tiles[7].innerHTML === player && tiles[8].innerHTML === player) || 
     (tiles[0].innerHTML === player && tiles[3].innerHTML === player && tiles[6].innerHTML === player) || 
     (tiles[1].innerHTML === player && tiles[4].innerHTML === player && tiles[7].innerHTML === player) || 
     (tiles[2].innerHTML === player && tiles[5].innerHTML === player && tiles[8].innerHTML === player) || 
     (tiles[0].innerHTML === player && tiles[4].innerHTML === player && tiles[8].innerHTML === player) || 
     (tiles[2].innerHTML === player && tiles[4].innerHTML === player && tiles[6].innerHTML === player)) {
    
    wonLose.style.display = "block";
    board.style.display = 'none';
    youChoose.style.display = "none";
    wonLose.innerHTML = "You Won!!!";
  }
  else if((tiles[0].innerHTML === computer && tiles[1].innerHTML === computer && tiles[2].innerHTML === computer) || 
     (tiles[3].innerHTML === computer && tiles[4].innerHTML === computer && tiles[5].innerHTML === computer) || 
     (tiles[6].innerHTML === computer && tiles[7].innerHTML === computer && tiles[8].innerHTML === computer) || 
     (tiles[0].innerHTML === computer && tiles[3].innerHTML === computer && tiles[6].innerHTML === computer) || 
     (tiles[1].innerHTML === computer && tiles[4].innerHTML === computer && tiles[7].innerHTML === computer) || 
     (tiles[2].innerHTML === computer && tiles[5].innerHTML === computer && tiles[8].innerHTML === computer) || 
     (tiles[0].innerHTML === computer && tiles[4].innerHTML === computer && tiles[8].innerHTML === computer) || 
     (tiles[2].innerHTML === computer && tiles[4].innerHTML === computer && tiles[6].innerHTML === computer)) {
    
    wonLose.style.display = "block";
    board.style.display = 'none';
    youChoose.style.display = "none";
    wonLose.innerHTML = "You Lose!!!";
  } 
   else if(moves === 9) {
    wonLose.style.display = "block";
    board.style.display = 'none';
    youChoose.style.display = "none";
    wonLose.innerHTML = "Draw!!!";
  }
 });
}