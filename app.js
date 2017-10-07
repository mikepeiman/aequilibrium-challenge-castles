// 1. Create an array 
// 2. set array length
// 3. fill array with random integers
// 2. Function - logic to determine what is peak and what is valley, and track number of each per array
// 

runApp = function() {
	var terrain = [];
	var peaks = 0;
	var valleys = 0;
	terrain.length = 20;
	generateTerrain = function() {

		for (i = 0; i < terrain.length; i++) {
			terrain[i] = Math.floor(Math.random() * 10);
			console.log("Iteration #" + i + " terrain is " + terrain[i]);
			document.getElementById("terrainUnit").innerHTML += "<li>" + terrain[i] + "</li>";
		}
	console.log(terrain);
	}
	generateTerrain();
		determinePeaks = function(terrain) {
		for (i = 0; i < terrain.length; i++) {
			var left = terrain[i];
			var middle = terrain[i + 1];
			var right = terrain[i + 2];
			console.log("Peak sequence " + i + " = left: " + left + ", middle: " + middle + ", right: " + right);
		if (middle > left && middle > right) {
			console.log("Peak sequence " + i + " is a PEAK");
			peaks += 1;
		}
		}
		console.log("there are a total of " + peaks + " peaks in this tract of land.");
	}
		determineValleys = function(terrain) {
		for (i = 0; i < terrain.length; i++) {
			var left = terrain[i];
			var middle = terrain[i + 1];
			var right = terrain[i + 2];
			console.log("Valley sequence " + i + " = left: " + left + ", middle: " + middle + ", right: " + right);
		if (middle < left && middle < right) {
			console.log("Valley sequence " + i + " is a VALLEY");
			valleys += 1;
		}
		}
		console.log("there are a total of " + valleys + " valleys in this tract of land.");
	}
	determinePeaks(terrain);
	determineValleys(terrain);

}