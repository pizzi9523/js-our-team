const members_team = [

    {
        name: "Giuseppe",
        role: "Student",
        image: "https://picsum.photos/id/1025/200/300"
    },

    {
        name: "Elizabeth Green",
        role: "CEO",
        image: "https://picsum.photos/id/1011/200/300"
    },

    {
        name: "Fabio",
        role: "Teacher",
        image: "https://picsum.photos/id/1005/200/300"
    }

]


for (let i = 0; i < members_team.length; i++) {
    for (const key in members_team[i]) {
        console.log(members_team[i][key]);
    }
}

let card = "";
for (let i = 0; i < members_team.length; i++) {
    card +=
        `<div class="card" style="width: 18rem;">
        <img src=${members_team[i]["image"]} class="card-img-top my-3" alt="...">
        <div class="card-body">
        <h5 class="card-title">${members_team[i]["name"]}</h5>
        <p class="card-text">${members_team[i]["role"]}</p>
        </div>
    </div>`
}

document.querySelector(".row").innerHTML = card;
