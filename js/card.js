let teeTyp;

function makeCard(objArr){
    let each = '';
    objArr.forEach(ele => {

        each += `<tr class="player">
        <th scope="row">${ele.name}</th>
      </tr>`
    });
    document.getElementById('tableGolf').innerHTML += each;
}

function tableInfo(clasCours){
    teeTyp = clasCours.tee;
    const golfHole = fetchHole();
    golfHole.then(displayInfo);

    async function fetchHole(){
        const getting = await fetch(`https://golf-courses-api.herokuapp.com/courses/${clasCours.id}`)
        return getting.json()
            
    }

}

function displayInfo(holeInfo){
    const data = holeInfo.data;
    const holeAm = data.holes;
    let holHtm = '';
    let yardHtm = '';
    let hcpHtm = '';
    let parHtm = '';
    let i = 0;
    holeAm.forEach(element => {
        parHtm += `<td>${holeAm[i].teeBoxes[teeTyp].par}</td>`
        yardHtm += `<td>${holeAm[i].teeBoxes[teeTyp].yards}</td>`
        hcpHtm += `<td>${holeAm[i].teeBoxes[teeTyp].hcp}</td>`
        i++;
        holHtm += `<td>${i}</td>`
    });
    document.getElementById('hole').innerHTML += holHtm;
    document.getElementById('yard').innerHTML += yardHtm;
    document.getElementById('hcp').innerHTML += hcpHtm;
    document.getElementById('par').innerHTML += parHtm;
    // innerHTML = holHtm;
}