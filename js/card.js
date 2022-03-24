function makeCard(objArr){
    console.log(objArr);
    let each = '';
    objArr.forEach(ele => {

        each += `<tr class="player">
        <th scope="row">${ele.name}</th>
      </tr>`
    });
    document.getElementById('tableGolf').innerHTML += each;
}