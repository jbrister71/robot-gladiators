var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    do {
        enemyHealth -= playerAttack;
        if(enemyHealth <= 0) {
            window.alert(enemyName + " has been defeated!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
        playerHealth -= enemyAttack;
        if(playerHealth <= 0) {
            window.alert(playerName + " has been defeated...");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    } while (playerHealth > 0 && enemyHealth > 0);
}

fight();