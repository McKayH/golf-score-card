let teeTyp;
// adds players to the card
function makeCard(objArr){
    let each = '';
    objArr.forEach(ele => {
        let inpts = ''
        for (let i = 0; i < 19; i++) {
            const ran = ele.id + i+1 + Math.random();
            if (i === 9) {
                inpts += `<td></td>`
            }
            else{
                inpts += `<td id='${ran}'><button type="button" class="btn btn-info" onclick="inputSwings(${ele.id}, ${ran})">Score</button></td>`
            }
        }
        each += `<tr class="player">
        <th scope="row">${ele.name}<input type="number" placeHolder="score" value="0" id="${ele.id}Inp"></th>
        ${inpts}
        <td id="${ele.name}Out"></td><td id="${ele.name}In"></td><td id="${ele.name}Tot"></td>
        </tr>`
        check = ele.name;    
    });
    document.getElementById('tableGolf').innerHTML += each;
}
// geting the course
function tableInfo(clasCours){
    teeTyp = clasCours.tee;
    const golfHole = fetchHole();
    golfHole.then(displayInfo);

    async function fetchHole(){
        const getting = await fetch(`https://golf-courses-api.herokuapp.com/courses/${clasCours.id}`)
        return getting.json()
            
    }

}
// displaying course info such as yardage hcp par.
function displayInfo(holeInfo){
    const data = holeInfo.data;
    const holeAm = data.holes;
    let holHtm = '';
    let yardHtm = '';
    let hcpHtm = '';
    let parHtm = '';
    let i = 0;
    holeAm.forEach(ele => {
        parHtm += `<td>${holeAm[i].teeBoxes[teeTyp].par}</td>`
        yardHtm += `<td>${holeAm[i].teeBoxes[teeTyp].yards}</td>`
        hcpHtm += `<td>${holeAm[i].teeBoxes[teeTyp].hcp}</td>`
        i++;
        holHtm += `<td>${i}</td>`
        if (ele.hole === 9) {
            holHtm += `<td>Split</td>`;
            yardHtm += `<td></td>`;
            hcpHtm += `<td></td>`;
            parHtm += `<td></td>`;
        }
    });
    document.getElementById('hole').innerHTML += `${holHtm}<td>OUT</td><td>IN</td><td>ToT</td>`;
    document.getElementById('yard').innerHTML += yardHtm;
    document.getElementById('hcp').innerHTML += hcpHtm;
    document.getElementById('par').innerHTML += parHtm;
}
