var Original_Number = 0;

var Manuel_Increase_Number = 1;

var Auto_Increase_Number = 0;

var View_Score = 0;

var Cost = 0;

var click_Rate = 1000;

//disables the auto button
// document.getElementById("Auto").setAttribute("disabled", "disabled");

//diables the purchase manual counter button

// if (View_Score >= 25) {
//
//     document.getElementById('Auto').removeAttribute("disabled");
//
//     Purchase();
//
// }

// Funciton to Manuelly Increase the score
function Increase() {

    Original_Number +=1;

        Score();

}

//Function to view the score
function Score(){

    View_Score = View_Score + Manuel_Increase_Number + Auto_Increase_Number;

    var e = document.getElementById("total_clicks");
    e.innerHTML = View_Score;

}

//Function to purchase upgrades
function Purchase() {

    // View_Score =- 25;
    //
    // function Increase() {
    //
    //     Original_Number +=5;
    //
    //     Score();
    //
    // }

}

// Function to upgrade the manual counter
function UpgradeCounter() {

    Original_Number +=5;

    Score();


}

//Function to increase the Auto Counter
function UpgradeAuto() {

    if (View_Score > 100 ) {

        document.getElementById('Auto').removeAttribute("disabled");

        // UpgradeAuto2();
    }

}

UpgradeAuto();


//Function for the Auto Increase
function Auto() {

        interval_auto = setInterval(function() {

            Original_Number += Auto_Increase_Number;

            Score();

        }, click_Rate);

    document.getElementById("Auto").setAttribute("disabled", "disabled");
}


// function DisableButtons() {
//
//     if (original ) {
//
//     }
// }
//
//
// function UpgradeAuto2() {
//
//     Auto_Increase_Number = 5;
//
//     interval_auto = setInterval(function() {
//
//         Original_Number += Auto_Increase_Number;
//
//         Score();
//
//     }, click_Rate);
//
//     document.getElementById("UpgradedAuto").setAttribute("disabled", "disabled");
// }