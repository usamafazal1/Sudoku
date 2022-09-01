var numSelected = null;
var tileSelected = null;

var errors;
var board;
var solution;
function clickEasy() {
    errors = 0
    document.getElementById("errors").innerText = errors;
    document.getElementById('board').innerHTML="";
    document.getElementById('digits').innerHTML="";
  var boardeasy = [
    "--749162-",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "-96253187",
    "934176852",
    "675832941",
    "-1294576-",
  ];
  var solutioneasy = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763",
  ];
  board = boardeasy;
  solution = solutioneasy;
  setGame();
  
}
function clickMedium() {
    errors = 0;
    document.getElementById("errors").innerText = errors;
    document.getElementById('board').innerHTML="";
    document.getElementById('digits').innerHTML="";
    var boardmedium = [
      "--7--16-5",
      "2---6---9",
      "-----7-1-",
      "-586----4",
      "--3----9-",
      "---2--187",
      "9-4-7---2",
      "67-8-----",
      "81--45---",
    ];
    var solutionmedium = [
      "387491625",
      "241568379",
      "569327418",
      "758619234",
      "123784596",
      "496253187",
      "934176852",
      "675832941",
      "812945763",
    ];
    board = boardmedium;
    solution = solutionmedium;
    setGame();
  }
  function clickHard() {
    errors = 0;
    document.getElementById("errors").innerText = errors;
    document.getElementById('board').innerHTML="";
    document.getElementById('digits').innerHTML="";
    var boardhard = [
      "--7--16-5",
      "2-----3-9",
      "-----7---",
      "-5-6----4",
      "--3----9-",
      "---2--1-7",
      "9-4-7---2",
      "67-8-----",
      "8---45---",
    ];
    var solutionhard = [
      "387491625",
      "241568379",
      "569327418",
      "758619234",
      "123784596",
      "496253187",
      "934176852",
      "675832941",
      "812945763",
    ];
    board = boardhard;
    solution = solutionhard;
    setGame();
  }

  function clickSolve() {
    errors = 0;
    document.getElementById("errors").innerText = errors;
    document.getElementById('board').innerHTML="";
    document.getElementById('digits').innerHTML="";
    var boardSol = [
      "387491625",
      "241568379",
      "569327418",
      "758619234",
      "123784596",
      "496253187",
      "934176852",
      "675832941",
      "812945763",
    ];
    board = boardSol;
    setGame();
  }

window.onload = function () {
    
  
};

function setGame() {
  // Digits 1-9
  for (let i = 1; i <= 9; i++) {
    //<div id="1" class="number">1</div>
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNumber);
    number.classList.add("number");
    document.getElementById("digits").appendChild(number);
  }

  // Board 9x9
  for (let r = 0; r < 9; r++) {
    for (let c = 0; c < 9; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      if (board[r][c] != "-") {
        tile.innerText = board[r][c];
        tile.classList.add("tile-start");
      }
      if (r == 2 || r == 5) {
        tile.classList.add("horizontal-line");
      }
      if (c == 2 || c == 5) {
        tile.classList.add("vertical-line");
      }
      tile.addEventListener("click", selectTile);
      tile.classList.add("tile");
      document.getElementById("board").append(tile);
    }
  }


}

function selectNumber() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }

    // "0-0" "0-1" .. "3-1"
    let coords = this.id.split("-"); //["0", "0"]
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);

    if (solution[r][c] == numSelected.id) {
      this.innerText = numSelected.id;
    } else {
      errors += 1;
      document.getElementById("errors").innerText = errors;
      alert("You entered the wrong number")
    }

  }
}


