let players = [];
class Player{
    constructor(name, scores = []){
        this.name = name;
        this.id = Math.random() * 100;
        this.scores = scores;
      }
}


function addPlayer(){
    const val = document.getElementById('name').value;
    const player = new Player(val);
    players.push(player)
    console.log(players);
    document.getElementById('playerDisplay').innerHTML += `<div class="input-name-dis">${player.name}</div>`
}

function generateCard(){
  if (players.length) {
    document.getElementById('theWhole').innerHTML = `<head>
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
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
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
                <tr id="yardage">
                  <th scope="row">Yardage</th>
                </tr>
              </thead>
              <tbody id="tableGolf">
                <tr id="handi">
                  <th scope="row">Handicap</th>
                </tr>
                <tr id="par">
                  <th scope="row">Par</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</body>
<script src="js/Input.js"></script>
<script src="js/card.js"></script>`
    makeCard(players)
  }
  else{
    alert('HAVE NO PLAYERS');
  }
}