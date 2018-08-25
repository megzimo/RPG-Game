$(document).ready(function() {

    let selected = false; //set to true after user selects character
    let enemySelected = false; //set to true after enemies are moved
    var playerHealh;
    var defenderHealth;
    var playerAttack;
    var defenderAttack

        let characters = [
        {
        id: 0,
        name: "Old Gregg",
        health: 200,
        attackValue: 30, //how much damage the character can do to other characters
        damageValue: 15, //how much damage the character receives from attack
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
        damageValue: 10,
        img: "assets/images/howard-moon.jpg"
        },
        {
        id: 3,
        name: "Naboo",
        health: 190,
        attackValue: 25,
        damageValue: 20,
        img: "assets/images/naboo.jpg"
        }
    ];

  // loading all characters to card group area
  characters.map(character => {
    console.log(character.name);
    console.log("Character Health:", character.health);
    console.log("Character Attack Value:", character.attackValue);

    let charCard = 
        `<div class="card border-secondary mb-3 name ${character.name}" data-attack="${character.attackValue}" data-myval="${character.health}"
        style="max-width: 18rem;" id="character-${character.id}"> 
            <div class="card-header bg-transparent border-secondary">${character.name}</div>
                <div class="card-body text-success">
                    <img src=${character.img} class="icon">   
                </div>
            <div class="card-footer bg-transparent border-secondary health">Health: ${character.health}</div>
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
        let opponents = $('.card-group');
        console.log(opponents);
        $(opponents).appendTo('.available-oponents');
    }

    // select enemy
    function selectEnemy(badGuy) {
        $(badGuy).appendTo('.defender');
        console.log("bad guy:", badGuy);
        enemySelected = true;
    }

    // begin duel
    $('#fight').on('click', function(){
        let defenderHealth = $('.defender').children('.card').data('myval');
        console.log("defender health:", defenderHealth);
        let playerHealth = $('.your-character').children('.card').attr('data-myval');
        console.log("player health:", playerHealth);
        let defenderAttack = $('.defender').children('.card').data('attack');
        console.log("defender attack:", defenderAttack);
        let playerAttack = $('.your-character').children('.card').data('attack');
        console.log("player attack:", playerAttack);
        
        // decrease in health points begins here
        defenderHealth -= playerAttack;
        $('.defender').find('.health').text('Health:' + defenderHealth);
        $('.defender').find('.card').data('myval', defenderHealth);

        playerHealth -= defenderAttack;
        $('.your-character').find('.health').text('Health:' + playerHealth);
        $('.your-character').find('.card').attr('data-myval', playerHealth);

        if(defenderHealth <= 0){
            $('.defender').empty();
        }

    })
        


      
    //clear characterArea, write selectedChar back to characterArea, write enemies to enemyArea
    


}); // ENDS .ready(function)
