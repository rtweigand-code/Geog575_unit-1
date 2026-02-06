// Activity 3 - Cities Table + Debugging (fixed)
// goal: make the table draw + add hover + click interactions

// data (array of objects)
var cityPop = [
  {
    city: "Madison",
    population: 233209
  },
  {
    city: "Milwaukee",
    population: 594833
  },
  {
    city: "Green Bay",
    population: 104057
  },
  {
    city: "Superior",
    population: 27244
  }
];

// runs when the DOM is ready
function initialize() {
  cities();
}

// builds the table + calls the other functions
function cities() {
  // make the table element
  var table = document.createElement("table");

  // header row
  var headerRow = document.createElement("tr");
  headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");
  table.appendChild(headerRow);

  // add rows for each city
  for (var i = 0; i < cityPop.length; i++) {
    var rowHtml =
      "<tr><td>" +
      cityPop[i].city +
      "</td><td>" +
      cityPop[i].population +
      "</td></tr>";

    table.insertAdjacentHTML("beforeend", rowHtml);
  }

  // add table to the div in index.html
  document.querySelector("#myDiv").appendChild(table);

  // add the extra column + the interactions
  addColumns(cityPop);
  addEvents();
}

// adds a 3rd column called "City Size"
function addColumns(cityPop) {
  // loop through each table row
  document.querySelectorAll("tr").forEach(function (row, i) {
    // first row is the header
    if (i === 0) {
      row.insertAdjacentHTML("beforeend", "<th>City Size</th>");
    } else {
      var citySize;

      // cityPop index is i-1 because header row is i=0
      if (cityPop[i - 1].population < 100000) {
        citySize = "Small";
      } else if (cityPop[i - 1].population < 500000) {
        citySize = "Medium";
      } else {
        citySize = "Large";
      }

      // add the new td cell at the end of the row
      row.insertAdjacentHTML("beforeend", "<td>" + citySize + "</td>");
    }
  });
}

// hover + click interactions
function addEvents() {
  // add events to each non-header row
  document.querySelectorAll("tr").forEach(function (row, i) {
    if (i === 0) return; // skip header

    // hover: random background color
    row.addEventListener("mouseover", function () {
      var color = "rgb(";

      for (var j = 0; j < 3; j++) {
        var random = Math.round(Math.random() * 255);
        color += random;

        if (j < 2) {
          color += ",";
        } else {
          color += ")";
        }
      }

      row.style.backgroundColor = color;
      row.style.cursor = "pointer";
    });

    // un-hover: reset background
    row.addEventListener("mouseout", function () {
      row.style.backgroundColor = "";
    });

    // click: simple alert
    row.addEventListener("click", function () {
      alert("Hey, you clicked a row!");
    });
  });
}

// call initialize when the DOM has loaded
document.addEventListener("DOMContentLoaded", initialize);
