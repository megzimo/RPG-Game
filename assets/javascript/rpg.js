$(document).ready(function() {

    let selected = false; //set to true after user selects character
    let enemySelected = false; //set to true after enemies are moved
    let playerAlive = true;
    let enemies = 3;
    var playerHealh;
    var defenderHealth;
    var playerAttack;
    var defenderAttack

        let characters = [
            {
            id: 0,
            name: "Old Gregg",
            health: 200,
            attackValue: 35, //how much damage the character can do to other characters
            powerUpAttack: 15,
            img: "assets/images/old-gregg.jpg"
            },
            
            {
            id: 1,
            name: "Bollo",
            health: 170,
            attackValue: 20,
            powerUpAttack: 15,
            img: "assets/images/bollo.jpg"
            },

            {
            id: 2,
            name: "Howard Moon",
            health: 130,
            attackValue: 3,
            powerUpAttack: 10,
            img: "assets/images/howard-moon.jpg"
            },

            {
            id: 3,
            name: "Naboo",
            health: 175,
            attackValue: 15,
            powerUpAttack: 15,
            img: "assets/images/naboo.jpg"
            }
        ];

  // loading all characters to card group area
  characters.map(character => {
    console.log(character.name);

    let charCard = 
        `<div class="card mb-3 name ${character.name}" data-attack="${character.attackValue}" data-myval="${character.health}"
        style="max-width: 18rem;" id="character-${character.id}"> 
            <div class="card-header ">${character.name}</div>
                <div class="card-body ">
                    <img src=${character.img} class="mx-auto d-block icon">   
                </div>
            <div class="card-footer health">Health: ${character.health}</div>
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
    
    function endGame(){
        if(playerAlive){
            $(".messageBoard").text("Good job! You've earned some Bailey's in a shoe.");
            $(".messageBoard").prepend('<img class="baileys" src="assets/images/baileys.png" />')
        }
        else{
            $(".messageBoard").html("<strong>You have been defeated</strong>");
        }
        $('.available-opponents').hide();
    }
    

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
    if(enemies > 0){
        function selectEnemy(badGuy) {
            $(badGuy).appendTo('.defender');
            console.log("bad guy:", badGuy);
            enemySelected = true;
            console.log("enemy selected:", enemySelected);
        }
    }
    // reset button
    $("#reset").on('click', function() {
        location.reload();
    });

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
        $('.defender').find('.health').text('Health: ' + defenderHealth);
        $('.defender').find('.card').data('myval', defenderHealth);

        playerHealth -= defenderAttack;
        $('.your-character').find('.health').text('Health: ' + playerHealth);
        $('.your-character').find('.card').attr('data-myval', playerHealth);
        
        if(defenderHealth <= 0){
            $('.defender').empty();
            enemies -= 1;
            console.log('enemies:', enemies);
            enemySelected = false;
            console.log("enemy selected:", enemySelected);
            return;
        }
// add class and remove class active defender ----------------------------------------------NOTES FROM B TO FIX THE NaN value--------------------------------

        // if(enemySelected === false){
        //     $('#fight').unbind('click');
        // }

        if(playerHealth <= 0){
            alert("YOU SUCK!!! Maybe try again");
            playerAlive = false;
            $('#fight').off('click');
            endGame();
            //reset button in this conditional that doesn't allow you to move the opponents to defender area
        }
        if(enemies === 0){
            alert("YOU Win!! Praise Be.");
            endGame();
        }
    

    })
        


      
//     //clear characterArea, write selectedChar back to characterArea, write enemies to enemyArea
    


}); // ENDS .ready(function)
