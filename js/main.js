const golfAPI = CoursApi();

// golfAPI.then(displayCard);
const golfHole = fetchHole();


async function CoursApi(){
    const getting = await fetch('https://golf-courses-api.herokuapp.com/courses/')
    return getting.json()
}
async function fetchHole(){
    const getting = await fetch('https://golf-courses-api.herokuapp.com/courses/11819')
    return getting.json()
        
}
// function displayCard(card){
//     console.log(card);
//     let htm = '';
//     card.courses.forEach(item => {
//         htm += `<span class="clicky" onclick="setInfo('${item.image}')">${item.name}</span>`;
//     });
//     document.getElementById('navLinks').innerHTML = htm;
//     document.getElementById('navLinksSide').innerHTML = htm;
    
    // console.log(htm);

// }