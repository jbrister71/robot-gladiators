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
                playerMoney = Math.max(0, playerMoney - 10);
                break;
            }
            else {
                fight();
            }
        }
        var damage = randomNumber(playerAttack, playerAttack - 3);
        enemyHealth = Math.max(0, enemyHealth - damage);
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated!");
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        var damage = randomNumber(enemyAttack, enemyAttack - 3);
        playerHealth = Math.max(0, playerHealth - damage);
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
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
    for(var i = 0; i < enemyNames.length; i++) {

        if(playerHealth > 0) {
            enemyHealth = randomNumber(60, 40);
            window.alert("Welcome to Robot Galdiators!");
            window.alert("ROUND " + (i+1) +"!");
            window.alert("FIGHT!");
            fight(enemyNames[i]);
            if(i < enemyNames.length-1 && playerHealth > 0) {
                var storeConfirm = window.confirm("The fight is over. Would you like to visit the store?");
                if(storeConfirm) {
                    shop();
                }
            }
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

var shop = function() {
    var shopOptionPrompt = window.prompt(
    "Welcome to the store. Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
    
    switch(shopOptionPrompt) {
        case "refill":
        case "REFILL":
            if(playerMoney >= 7) {
                window.alert("Refilling player health.");
                playerHealth += 20;
                playerMoney -= 7;
                break;
            }
            else {
                window.alert("You don't have enough money!");
                break;
            }
        
        case "upgrade":
        case "UPGRADE":
            if (playerMoney >= 7) {
                window.alert("Upgrading player attack.");
                playerAttack += 6;
                playerMoney -= 7;
                break;
            }
            else {
                window.alert("You don't have enough money!");
                break;
            }

        case "leave":
        case "LEAVE":
            window.alert("Leaving the store...");
            break;

        default:
            window.alert("Please input a valid response.");
            shop();
            break;
    }
}

var randomNumber = function(max, min) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

startGame();