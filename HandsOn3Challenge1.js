

var floatMiles, floatGallons, floatMPG;
     floatMiles = prompt("Enter miles driven");
     floatMiles = parseFloat(floatMiles);
     floatGallons = prompt("Enter gallons of gas used");
     floatGallons = parseFloat(floatGallons);
     floatMPG = floatMiles/floatGallons;
     alert("Miles per gallon = " + floatMPG);
