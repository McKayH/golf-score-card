const golfAPI = fetchGolf();

const golfHole = fetchHole();
//golfAPI.then(displayCard);

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
    console.log(card);
    let htm = '';
    card.courses.forEach(item => {
        console.log(item.name);
        htm += `<div>${item.name}</div>`;
    });
    document.getElementById('page').innerHTML = htm;
    console.log(htm);

}