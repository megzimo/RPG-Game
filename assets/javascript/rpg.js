$(document).ready(function () {

    let characters = {
        gregg: {
            name: "Old Gregg",
            health: 200,
            attackValue: 25, //how much damage the character can do to other characters 
            damageValue: 15, //how much damage the character receives when attacked
        },
        bollo: {
            name: "Old Gregg",
            health: 180,
            attackValue: 25,
            damageValue: 15,
        },
        howard: {
            name: "Old Gregg",
            health: 130,
            attackValue: 10,
            damageValue: 25,
        },
        naboo: {
            name: "Old Gregg",
            health: 190,
            attackValue: 25,
            damageValue: 15,
        }
    };

//Moving characters from group to combat area//
$('.arena').on('click', function() {
    gregg.appendTo(".arena");
})
})
