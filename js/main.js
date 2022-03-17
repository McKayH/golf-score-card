const golfAPI = fetchGolf();

golfAPI.then(displayCard);
const golfHole = fetchHole();


function fetchGolf(){
    return fetch('https://golf-courses-api.herokuapp.com/courses/').then(
        function (response) {
            return response.json();
        }
        );
    }
function fetchHole(){
    return fetch('https://golf-courses-api.herokuapp.com/courses/11819').then(
        function (response) {
            return response.json();
        }
        );
    }
function displayCard(card){
    //console.log(card);
    let htm = '';
    card.courses.forEach(item => {
        htm += `<span class="mdl-navigation__link clicky" onclick="setInfo('${item.image}')">${item.name}</span>`;
    });
    document.getElementById('navLinks').innerHTML = htm;
    document.getElementById('navLinksSide').innerHTML = htm;
    
    // console.log(htm);

}