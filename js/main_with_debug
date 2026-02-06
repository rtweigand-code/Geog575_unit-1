// Activity 3 - Cities Table + Debugging (Fixed)
// goal: draw a table, add a "City Size" column, and add hover + click interactions

// array of objects for city + population (from the chapter examples)
var cityPop = [
  {
    city: 'Madison',
    population: 233209
  },
  {
    city: 'Milwaukee',
    population: 594833
  },
  {
    city: 'Green Bay',
    population: 104057
  },
  {
    city: 'Superior',
    population: 27244
  }
];

// run everything once the DOM is ready
function initialize() {
  cities();
}

// build the table and add it to the div
function cities() {
  // create the table element
  var table = document.createElement("table");

  // create a header row
  var headerRow = document.createElement("tr");
  headerRow.insertAdjacentHTML("beforeend", "<th>City</th><th>Population</th>");
  table.appendChild(headerRow);

  // loop through cityPop and add each row
  for (var i = 0; i < cityPop.length; i++) {
    var rowHtml = "<tr><td>" + cityPop[i].city + "</td><td>" + cityPop[i].population + "</td></tr>";
    table.insertAdjacentHTML("beforeend", rowHtml);
  }

  // add the table to the div in index.html
  document.querySelector("#myDiv").appendChild(table);

  // add extra column + events
  addColumns(cityPop);
  addEvents();
}

// add a "City Size" column based on population
function addColumns(cityPop) {

  document.querySelectorAll("tr").forEach(function(row, i) {

    // header row
    if (i == 0) {
      row.insertAdjacentHTML('beforeend', '<th>City Size</th>');

    // data rows
    } else {
      var citySize;

      if (cityPop[i - 1].population < 100000) {
        citySize = 'Small';

      } else if (cityPop[i - 1].population < 500000) {
        citySize = 'Medium';

      } else {
        citySize = 'Large';
      }

      row.insertAdjacentHTML('beforeend', '<td>' + citySize + '</td>');
    }
  });
}

// hover + click interactions
function addEvents() {

  // add events to each data row (skip header)
  document.querySelectorAll("tr").forEach(function(row, i) {

    if (i > 0) {

      // hover = random background color
      row.addEventListener("mouseover", function() {

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
      });

      // mouse out = reset background
      row.addEventListener("mouseout", function() {
        row.style.backgroundColor = "";
      });

      // click = alert
      row.addEventListener("click", function() {
        alert("Hey, you clicked me!");
      });
    }
  });
}

// call initialize when the DOM has loaded
document.addEventListener('DOMContentLoaded', initialize);
