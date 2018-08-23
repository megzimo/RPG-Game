$(document).ready(function() {

    let selected = false; //set to true after user selects character
    let enemySelected = false; //set to true after enemies are moved
    let duelStart = false;
    let numAlive = 3;

    let characters = [
        {
        id: 0,
        name: "Old Gregg",
        health: 200,
        attackValue: 25, //how much damage the character can do to other characters
        damageValue: 15, //how much damage the character receives when attacked
        img: "assets/images/old-gregg.jpg"
        },
        {
        id: 1,
        name: "Bollo",
        health: 180,
        attackValue: 25,
        damageValue: 15,
        img: "assets/images/bollo.jpg"
        },
        {
        id: 2,
        name: "Howard Moon",
        health: 130,
        attackValue: 10,
        damageValue: 25,
        img: "assets/images/howard-moon.jpg"
        },
        {
        id: 3,
        name: "Naboo",
        health: 190,
        attackValue: 25,
        damageValue: 15,
        img: "assets/images/naboo.jpg"
        }
    ];

  let charChoice; // character chosen by player
  let opponents = []; // all available opponents queued
  let defender; // current opponent to battle
  let attack = 10; // baseline amount of damage player can do
  let damage; // damage done to player by opponents
  let victory = ""; // message to be displayed upon win
  let defeat = ""; // message to be displayed upon loss

  // loading all characters to card group area
  characters.map(character => {
    console.log(character.name);
    console.log(character.health);

    let charCard = `<div class="card border-secondary mb-3 ${
      character.name
    }" style="max-width: 18rem;" id="character-${character.id}"> 
                <div class="card-header bg-transparent border-secondary">${
                  character.name
                }</div>
                    <div class="card-body text-success">
                        <img src=${character.img} class="icon">   
                    </div>
                <div class="card-footer bg-transparent border-secondary">Health: ${
                  character.health
                }</div>
            </div>`;
    $(charCard).appendTo(".card-group").html; // displays character cards to group from charCard script
    $(document).on("click", `#character-${character.id}`, function(event){
        if(selected === false){
        selectChar(event.currentTarget);
        opponentsMove();
        }
        else if(enemySelected === false){
            selectEnemy(event.currentTarget);
        }
        });
    }); // ENDS character map
    
    

    // begin click to choose character
    
    function selectChar(selectedCard) {
        console.log(selectedCard);
        $(selectedCard).appendTo(".your-character")
        selected = true;
        }    

    // move unselected characters to opponents to defeat
    function opponentsMove() {
       let banana = $('.card-group');
        console.log(banana);
        $(banana).appendTo('.available-oponents');
    }

    // select enemy
    function selectEnemy(badGuy) {
        $(badGuy).appendTo('.defender');
        enemySelected = true;
    }


      
    //clear characterArea, write selectedChar back to characterArea, write enemies to enemyArea
    


}); // ENDS .ready(function)
