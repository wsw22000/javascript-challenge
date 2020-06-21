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

// Use D3 to select the Filter button
var button = d3.select("#filter-btn");

// On click of the button, call filterTable function
button.on("click", filterTable);

function filterTable() {
    // Clear Table Area
    tbody.html("");
    // Read in the value from the inputField
    filterDate = d3.select("#datetime");
    filterCity = d3.select("#city");
    filterState = d3.select("#state");
    filterCountry = d3.select("#country");
    filterShape = d3.select("#shape");

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
