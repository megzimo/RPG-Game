$(document).ready(function () {

    let characters = [
         {
            name: "Old Gregg",
            health: 200,
            attackValue: 25, //how much damage the character can do to other characters 
            damageValue: 15, //how much damage the character receives when attacked
            img: "assets/images/old-gregg.jpg",
        },
         {
            name: "Bollo",
            health: 180,
            attackValue: 25,
            damageValue: 15,
            img: "assets/images/bollo.jpg",
        },
         {
            name: "Howard Moon",
            health: 130,
            attackValue: 10,
            damageValue: 25,
            img: "assets/images/howard-moon.jpg",
        },
         {
            name: "Naboo",
            health: 190,
            attackValue: 25,
            damageValue: 15,
            img: "assets/images/naboo.jpg",
        }
    ];

let charChoice; // character chosen by player
let opponents = []; // all available opponents queued
let defender; // current opponent to battle
let attack = 10; // baseline amount of damage player can do
let damage; // damage done to player by opponents
let victory = ""; // message to be displayed upon win
let defeat = ""; // message to be displayed upon loss

// creating resets to ensure DOM and selections are clear
characters.map(character => { 
    console.log(character.name)
    console.log(character.health) 

    let charCard = 
        `<div class="card border-secondary mb-3" style="max-width: 18rem;" id="character"> 
            <div class="card-header bg-transparent border-secondary">${character.name}</div>
                <div class="card-body text-success">
                    <img src=${character.img} class="icon">   
                </div>
            <div class="card-footer bg-transparent border-secondary">Health: ${character.health}</div>
        </div>`
   
   
   
    $(charCard).appendTo('.card-group').html; //
 
})




}) // ENDS .ready(function)
