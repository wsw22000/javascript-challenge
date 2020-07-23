// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(data);

// Use d3 to update each cell's text with
// UFO sighting values (Date, city, state, country, shape, duration, comments)
tableData.forEach((ufoSighting) => {
    var row = tbody.append("tr");
    Object.entries(ufoSighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });

// Use D3 to select the filter button and input fields
var button = d3.select("#filter-btn");
var inputField1 = d3.select("#datetime");
var inputField2 = d3.select("#city");
var inputField3 = d3.select("#state");
var inputField4 = d3.select("#country");
var inputField5 = d3.select("#shape");

// On click of the button, call filterTable function
button.on("click", filterTable);

function filterTable() {
    // Clear Table Area
    tbody.html("");
    // Read in the value from the inputField
    filterDate = inputField1.property("value");
    filterCity = inputField2.property("value");
    filterState = inputField3.property("value");
    filterCountry = inputField4.property("value");
    filterShape = inputField5.property("value");

    // if input field is not blank, filter the original table to include
    // only sightings w criteria that match then pass it on to next filter.
    // If a criteria is blank, pass the data on to the next filter.
    if(filterDate){
      filteredData1 = data.filter(ufosighting => ufosighting.datetime === filterDate);
    }
    else {
      filteredData1 = data;
    }

    if(filterCity){
      filteredData2 = filteredData1.filter(ufosighting => ufosighting.city === filterCity);
    }
    else {
      filteredData2 = filteredData1;
    }      
    
    if(filterState){
      filteredData3 = filteredData2.filter(ufosighting => ufosighting.state === filterState);
    }
    else {
      filteredData3 = filteredData2;
    }    

    if(filterCountry){
      filteredData4 = filteredData3.filter(ufosighting => ufosighting.country === filterCountry);
    }
    else {
      filteredData4 = filteredData3;
    }    

    if(filterShape){
      filteredData5 = filteredData4.filter(ufosighting => ufosighting.shape === filterShape);
    }
    else {
      filteredData5 = filteredData4;
    }    


    // Populate tbody with the filtered data
    filteredData5.forEach(function(sighting) {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
            });
        });
  }
