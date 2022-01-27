var isFoodReady = false;

if (isFoodReady == true) {
    console.log('Ekhon khaoa daoa kora jay :D');
}
else {
    console.log('r khaoa holo na :(');
}

var myBudget = 100;
var bread = 50;
var toast = 42;
var biscuit = 5;
var cha = 7;

if (bread < myBudget) {
    console.log('bread khaoa jay :)');
}
else if (toast < myBudget) {
    console.log('toast khaoa jay');
}
else {
    if (cha < myBudget) {
        console.log('cha khao');
    }
    else {
        console.log('kopal pora!  khaoa holo na :(')
    }
}