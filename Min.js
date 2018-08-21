var Original_Number = 0;

var Manuel_Increase_Number = 1;

var Auto_Increase_Number = 0;

var View_Score = 0;

var Cost = 0;




// Funciton to Manuelly Increase the score
function Increase() {

    Original_Number +=1;

        Score();

}

//Function to view the score
function Score(){

    View_Score = View_Score + Manuel_Increase_Number + Auto_Increase_Number;

    var e = document.getElementsById("total_clicks");
    e.innerHTML = View_Score;

}

//Function to purchase upgrades

function Purchase() {



}

// Function to upgrade the manual counter
function UpgradeCounter() {


}

//Function to increase the Auto Counter
function UpgradeAuto() {


}
