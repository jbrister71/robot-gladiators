var randomNumber = function(max, min) {
    var value = Math.floor(Math.random() * (max - min + 1)) + min;
    return value;
}

var getPlayerName = function() {
    var name = "";

    while(name === null || name === "") {
        name = prompt("What is your robot's name?");
    }

    console.log("Your name is " + name);
    return name;
}

var fightOrSkip = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if(promptFight === "" || promptFight === null) {
        window.alert("You need to enter a valid response!");
        return fightOrSkip();
    }
    promptFight = promptFight.toLowerCase();
    if (promptFight === "skip") {
        var confirmSkip = window.confirm("Are you sure you'd like to SKIP this fight?");
        if(confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight.");
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            return true;
        }
    }
    else {
        return  false;
    }
}

var fight = function(enemy) {
    // keep track of who goes first
    var isPlayerTurn = true;
  
    // randomly change turn order
    if (Math.random() > 0.5) {
      isPlayerTurn = false;
    }
  
    while (playerInfo.health > 0 && enemy.health > 0) {
      if (isPlayerTurn) {
        // ask player if they'd like to fight or skip using fightOrSkip function
        if (fightOrSkip()) {
          // if true, leave fight by breaking loop
          break;
        }
  
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
  
        // remove enemy's health by subtracting the amount we set in the damage variable
        enemy.health = Math.max(0, enemy.health - damage);
        console.log(
          playerInfo.name +
            " attacked " +
            enemy.name +
            ". " +
            enemy.name +
            " now has " +
            enemy.health +
            " health remaining."
        );
  
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
  
          // award player money for winning
          playerInfo.money = playerInfo.money + 20;
  
          // leave while() loop since enemy is dead
          break;
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        // player gets attacked first
      } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);
  
        // remove player's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name +
            " attacked " +
            playerInfo.name +
            ". " +
            playerInfo.name +
            " now has " +
            playerInfo.health +
            " health remaining."
        );

        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
      }
      isPlayerTurn = !isPlayerTurn;
    }
};

var startGame = function() {
    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++) {

        if(playerInfo.health > 0) {
            enemyInfo[i].health = randomNumber(60, 40);
            window.alert("Welcome to Robot Galdiators!");
            window.alert("ROUND " + (i+1) +"!");
            window.alert("FIGHT!");
            fight(enemyInfo[i]);
            if(i < enemyInfo.length-1 && playerInfo.health > 0) {
                var storeConfirm = window.confirm("The fight is over. Would you like to visit the store?");
                if(storeConfirm) {
                    shop();
                }
            }
        }
        if(playerInfo.health <= 0) {
            window.alert(playerInfo.name + " has fallen... Game over...");
            break;
        }
    }

    endGame();
}

var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");

    if(playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
    "Welcome to the store. Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE to make a choice");
    shopOptionPrompt = parseInt(shopOptionPrompt);

    switch(shopOptionPrompt) {
        case 1:
            playerInfo.refillHealth();
            break;
        
        case 2:
            playerInfo.upgradeAttack();
            break;

        case 3:
            window.alert("Leaving the store...");
            break;

        default:
            window.alert("Please input a valid response.");
            shop();
            break;
    }
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.healthb = 100;
        this.attack = 10;
        this.money = 10;
    },
    refillHealth: function() {
        if(this.money >= 7) {
            window.alert("Refilling player health.");
            this.health += 20;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
            window.alert("Upgrading player attack.");
            this.attack += 6;
            this.money -= 7;
        }
        else {
            window.alert("You don't have enough money!");
        }
    }
};

console.log(playerInfo.name, playerInfo.health, playerInfo.attack);

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(14,10)
    },
    {
        name: "Amy Android",
        attack: randomNumber(14, 10)
    }, 
    {
        name: "Robo Trumble",
        attack: randomNumber(14,10)
    }
];

startGame();