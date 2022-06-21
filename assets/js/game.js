var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {;
    while(enemyHealth > 0 && playerHealth > 0) {
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        if (promptFight === "skip" || promptFight === "SKIP") {
            var confirmSkip = window.confirm("Are you sure you'd like to SKIP this fight?");
            if(confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight.");
                playerMoney -= 10;
                break;
            }
            else {
                fight();
            }
        }
        enemyHealth -= playerAttack;
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        playerHealth -= enemyAttack;
        if(playerHealth <= 0) {
            window.alert(playerName + " has been defeated...");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    }
}

var startGame = function() {
    for(var i = 0; i < enemyNames.length; i++) {
        playerHealth = 100;
        playerAttack = 10;
        playerMoney = 10;

        if(playerHealth > 0) {
            enemyHealth = 50;
            window.alert("Welcome to Robot Galdiators!");
            window.alert("ROUND " + (i+1) +"!");
            window.alert("FIGHT!");
            fight(enemyNames[i]);
        }
        if(playerHealth <= 0) {
            window.alert(playerName + " has fallen... Game over...");
            break;
        }
    }

    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if(playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle...");
    }

    var playAgainConfirm = window.confirm("Would you like to play again?");

    if(playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon.");
    }
}

startGame();