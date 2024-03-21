// creo oggetto per team
const team = [
    pers1 = {
        'name': 'Wayne Barnett',
        'role': 'Founder & CEO',
        'photoName': 'wayne-barnett-founder-ceo.jpg'
    },
    pers2 = {
        'name': 'Angela Caroll',
        'role': 'Chief Editor',
        'photoName': 'angela-caroll-chief-editor.jpg'
    },
    pers3 = {
        'name': 'Walter Gordon',
        'role': 'Office Manager',
        'photoName': 'walter-gordon-office-manager.jpg'
    },
    pers4 = {
        'name': 'Angela Lopez',
        'role': 'Social Media Manager',
        'photoName': 'angela-lopez-social-media-manager.jpg'
    },
    pers5 = {
        'name': 'Scott Estrada',
        'role': 'Developer',
        'photoName': 'scott-estrada-developer.jpg'
    },
    pers6 = {
        'name': 'Barbara Ramos',
        'role': 'Graphic Designer',
        'photoName': 'barbara-ramos-graphic-designer.jpg'
    }
]



let teamCanvas = document.getElementById('teamCanvas');

for (let i = 0; i < team.length; i++) {
    let teamCard = document.createElement('div');
    teamCard.setAttribute('class', 'card');
    teamCanvas.appendChild(teamCard);

    let teamphoto = document.createElement('img');
    const pathImg = `asset/img/${team[i].photoName}`;
    teamphoto.setAttribute('src', pathImg);
    teamCard.appendChild(teamphoto);

    // creo il div che ha dentro le info
    let cardinfo = document.createElement('div');
    cardinfo.classList.add('card-info');
    teamCard.appendChild(cardinfo);

    //creo il tag per nome 
    let name = document.createElement('h4');
    name.innerHTML = team[i].name;
    cardinfo.appendChild(name);

    //creo il tag per il ruolo
    let roleEl = document.createElement('p');
    roleEl.classList.add('role');
    roleEl.innerHTML = team[i].role;
    cardinfo.appendChild(roleEl)
}

// for (const key in team) {
//     let name = document.querySelectorAll('.nameEl');
//     name[key].innerHTML = team[key].name;
//     let roleEl = document.createElement('p');
//     roleEl.classList.add('role');
//     //roleEl[key].innerHTML += team[key].role;
//     // console.log(name);
// }

