const players = [];
class Player{
    constructor(name, scores = []){
        this.name = name;
        this.id = Math.random() * 100;
        this.scores = scores;
      }
}
class courseInfo{
  constructor(teeType, couresId){
    this.tee = teeType;
    this.id = couresId;
  }
}


function addPlayer(){
    const val = document.getElementById('name').value;
    const player = new Player(val);
    players.push(player)
    document.getElementById('playerDisplay').innerHTML += `<div class="input-name-dis">${player.name}</div>`
}

function generateCard(){
  const teeTy = document.getElementById('tee').value;
  const select = document.getElementById('courses').value;
  
  if (players.length && teeTy != -1 && select != 0){

    const choice = new courseInfo(teeTy, select);

    document.getElementById('theWhole').innerHTML = `
    <head>
    <title>Golf Score Card</title>
    <link rel="stylesheet" href="/bootstrap-5.1.3-dist/css/bootstrap.min.css">
    <script src="/bootstrap-5.1.3-dist/js/bootstrap.min.js"></script>
    <script src="/bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js"></script>
    <link rel="stylesheet" href="css/style.css">
    </head>
    <body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="input.html">Navbar</a>
    <div class="collapse navbar-collapse" id="navbarNav">
    </div>
    </nav>
    
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
    makeCard(players);
    tableInfo(choice);
  }
  else{
    alert('HAVE NO PLAYERS, OR NO TEE SELECTED, OR NO COURES SELECTED');
  }
}