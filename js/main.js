// ===============================
// Activity 4 – Debugged AJAX
// ===============================

// global so I can see how scope works
let myData = null;

// this runs once page loads
document.addEventListener("DOMContentLoaded", debugAjax);

function debugAjax() {

    // this will show null because fetch hasn't finished yet
    console.log("Outside callback (before fetch):", myData);

    fetch("data/MegaCities.geojson")
        .then(function(response){
            return response.json(); // convert to usable JSON
        })
        .then(function(response){

            // NOW the data exists
            myData = response;

            console.log("Inside callback (after data loads):", myData);

            debugCallback(myData);
        });


    console.log("Outside callback (after fetch call):", myData);
};

function debugCallback(data){

    console.log("Inside debugCallback():", data);

    document.querySelector("#mydiv").insertAdjacentHTML(
        "beforeend",
        "<br><br><strong>GeoJSON data:</strong><br>" + JSON.stringify(data)
    );
};
