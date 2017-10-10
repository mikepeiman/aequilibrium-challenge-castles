// 1. Create an array 
// 2. set array length
// 3. fill array with random integers
// 2. Function - logic to determine what is peak and what is valley, and track number of each per array
// 

runApp = function() {
	var terrain = [];
	var peaks = 0;
	var valleys = 0;

	generateTerrain = function() {
		document.getElementById("terrainUnit").innerHTML = "";
		document.getElementById("castlesRequired").innerHTML = "";
		var terrain = [];
		peaks = 0;
		valleys = 0;
		terrain.length = document.getElementById("terrainLength").value;
		for (i = 0; i < terrain.length; i++) {
			terrain[i] = Math.floor(Math.random() * 10);
		}
		terrain.push(Math.floor(Math.random() * 10));

	console.log(terrain);
	determinePeaksAndValleys(terrain);
	}
		determinePeaksAndValleys = function(terrain) {
		for (i = 0; i < terrain.length; i++) {
			var left = terrain[i];
			var middle = terrain[i + 1];
			var right = terrain[i + 2];
			
			if (middle > left && middle > right) {
				document.getElementById("terrainUnit").innerHTML += "<li><span class='item peaks'>" + terrain[i+1] + "</li>";
				console.log("Location " + i + " is a PEAK");
				peaks += 1;
				document.get
			} else if (middle < left && middle < right) {
				document.getElementById("terrainUnit").innerHTML += "<li><span class='item valleys'>" + terrain[i+1] + "</li>";
				console.log("Location " + i + " is a VALLEY");
				valleys += 1;
			} else {
				document.getElementById("terrainUnit").innerHTML += "<li><span class='item default'>" + terrain[i+1] + "</li>";
			}
		}
		document.getElementById("castlesRequired").innerHTML += "<p class='peaks'>There are a total of " + peaks + " peaks in this tract of land.</p>";
		document.getElementById("castlesRequired").innerHTML += "<p class='valleys'>There are a total of " + valleys + " valleys in this tract of land.</p>";
		document.getElementById("castlesRequired").innerHTML += "Your highness, we need to build <b>" + (peaks + valleys) + " castles</b> on this tract of land!";
	}
}