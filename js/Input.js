const players = [];
// player data
class Player{
    constructor(name, scores = []){
        this.name = name;
        this.id = Math.floor(Math.random() * 100);
        this.scores = scores;
      }
}
// what they choose for their game
class courseInfo{
  constructor(teeType, couresId){
    this.tee = teeType;
    this.id = couresId;
  }
}

// adds player data
function addPlayer(){
    const val = document.getElementById('name').value;
    const player = new Player(val);
    players.push(player)
    document.getElementById('playerDisplay').innerHTML += `<div class="input-name-dis">${player.name}</div>`
}
// makes the html page swwitch to the card
function generateCard(){
  const teeTy = document.getElementById('tee').value;
  const select = document.getElementById('courses').value;

  if (players.length && teeTy != -1 && select != 0){

    const choice = new courseInfo(teeTy, select);

    document.getElementById('page').innerHTML = `
    <div id="page">
    <!-- score card -->
    <div class="container">
    <div class="row">
    <div class="col-lg-12" id="header"></div>
    </div>
    <div class="row">
    <div class="col-lg-12">
    <div id="options-container"></div>
    </div>
    </div>
    <div class="row" id="scorecard-container">
    <div class="col-lg-12" id="scorecard">
    <div class="table-responsive">
    <table class="table table-bordered">
    <h2>Golf Time Baby!!!!</h2>
    <thead>
    <tr id="hole">
    <th scope="row">Hole</th>
    </tr>
    <tr id="yard">
    <th scope="row">Yardage</th>
    </tr>
    </thead>
    <tbody id="tableGolf"></tbody>
    <tfoot>
    <tr id="hcp">
    <th scope="row">Handicap</th>
    </tr>
    <tr id="par">
    <th scope="row">Par</th>
    </tr>
    </tfoot> 
    </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </body>
    <script src="js/getApI.js"></script>
    <script src="js/card.js"></script>
    <script src="js/Input.js"></script>`
    // goes to card.js
    makeCard(players);
    tableInfo(choice);
  }
  else{
    alert('HAVE NO PLAYERS, OR NO TEE SELECTED, OR NO COURES SELECTED');
  }
}
function inputSwings(playerId, holeId){
  console.log(playerId);
  players.forEach(ele => {
    if(ele.id === playerId){
        const inp = document.getElementById(`${ele.id}Inp`).value;
        ele.scores.push(parseInt(inp));
        console.log(ele.scores);
        document.getElementById(`${holeId}`).innerHTML = `<span>${inp}</span>`
        let addOut = 0;
        for (let i = 0; i < ele.scores.length; i++) {
          const element = ele.scores[i];
          if (i < 9) {
            addOut += element;
          }
        }
        document.getElementById(`${ele.name}Out`).innerHTML = `<span>${addOut}</span>`
        let addIn = 0;
        for (let t = 0; t < ele.scores.length; t++) {
          const element = ele.scores[t];
          if (t >= 9) {
            addIn += element;
          }
        }
        document.getElementById(`${ele.name}In`).innerHTML = `<span>${addIn}</span>`
        let add = 0;
        for (let f = 0; f < ele.scores.length; f++) {
          const element = ele.scores[f];
          console.log(element);
          add += element;
          console.log(add);
        }
        document.getElementById(`${ele.name}Tot`).innerHTML = `<span>${add}</span>`
      }
  });

}