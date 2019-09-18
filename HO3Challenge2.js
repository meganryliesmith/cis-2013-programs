//declare variables
var floatAge;
var floatDays;
var intWeeks;
var floatMonths;
var intFortnights;
//prompt user to give age
floatAge = prompt("Enter your age in years");
floatAge = parseFloat(floatAge); 
floatDays = parseFloat(floatAge * 365.25); //days = years * 365.25
floatMonths = parseFloat(floatAge*12);
intWeeks = parseInt(floatDays/7);
intFortnights = parseInt(floatDays/14); //days old / 14
alert("You are "+floatAge+" years old, "+floatDays+" days old, "+intWeeks+" weeks old, "+floatMonths+" months old, and "+intFortnights+" fortnights old.");
