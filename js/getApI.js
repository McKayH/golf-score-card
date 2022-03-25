const golfAPI = CoursApi();

golfAPI.then(displayCourse);

async function CoursApi(){
    const getting = await fetch('https://golf-courses-api.herokuapp.com/courses/')
    return getting.json()
}


function displayCourse(card){
    let htm = '';
    let img = '';
    card.courses.forEach(item => {
        img += `<div class="clicky"> <img src="${item.image}" alt="golf course">${item.name}</div>`;
        htm += `<option value="${item.id}">${item.name}</option>`;
    });
    document.getElementById('couresImgs').innerHTML = img;
    document.getElementById('courses').innerHTML += htm;
}