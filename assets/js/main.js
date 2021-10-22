const members_team = [

    {
        name: "Giuseppe",
        role: "Student",
        image: "https://picsum.photos/id/1/200/300"
    },

    {
        name: "Ben Green",
        role: "CEO",
        image: "https://picsum.photos/id/2/200/300"
    },

    {
        name: "Fabio",
        role: "Teacher",
        image: "https://picsum.photos/id/3/200/300"
    }

]


for (let i = 0; i < members_team.length; i++) {
    for (const key in members_team[i]) {
        console.log(members_team[i][key]);
    }
}


