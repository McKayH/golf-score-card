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
    let htm = '';
    card.courses.forEach(item => {
        htm += `<div class="clicky "> <img src="${item.image}" alt="golf course">
        <div class="form-check">
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
        <label class="form-check-label" for="flexRadioDefault1">
        ${item.name}
        </label>
      </div>
      </div>`;
    });
    document.getElementById('navLinks').innerHTML = htm;
}