const golfAPI = CoursApi();

golfAPI.then(displayCard);
const golfHole = fetchHole();


async function CoursApi(){
    const getting = await fetch('https://golf-courses-api.herokuapp.com/courses/')
    return getting.json()
}
async function fetchHole(){
    const getting = await fetch('https://golf-courses-api.herokuapp.com/courses/11819')
    return getting.json()
        
}
function displayCard(card){
    console.log(card);
    let htm = '';
    card.courses.forEach(item => {
        htm += `<div class="clicky " onclick="inputInfo('${item.image}')"> <img src="${item.image}" alt="golf course"><span>${item.name}</span></div>`;
    });
    document.getElementById('navLinks').innerHTML = htm;
}