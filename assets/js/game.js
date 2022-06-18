var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight === "fight" || promptFight === "FIGHT") {
        enemyHealth -= playerAttack;
        if(enemyHealth <= 0) {
            window.alert(enemyNames[0] + " has been defeated!");
        }
        else {
            window.alert(enemyNames[0] + " still has " + enemyHealth + " health left.")
        }
        console.log(playerName + " attacked " + enemyNames[0] + ". " + enemyNames[0] + " now has " + enemyHealth + " health remaining.");
        playerHealth -= enemyAttack;
        if(playerHealth <= 0) {
            window.alert(playerName + " has been defeated...");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        console.log(enemyNames[0] + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    }
    else if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to SKIP this fight?");
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight.");
            playerMoney -= 2;
        }
        else {
            fight();
        }
    }
    else {
        window.alert("You must choose a valid option. Try again.");
    }
}

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}