

function convert () {

    var input = document.getElementById("input_number").value;
   
    
    

// LENGTH VARIABLES
let feetConversion = 3.28;
let meterConversion = 0.30;

let lengthOutput = document.querySelector(".length_output_el");
lengthOutput.innerHTML = input + " meters " + " = " + input * feetConversion + " feet" + " " + " | " + input + " feet" + " = " + input * meterConversion + " meters" ;


// VOLUME VARIABLES
let gallonConversion = 0.264;
let litersConversion = 3.785;

let volumeOutput = document.querySelector(".volume_output_el");
volumeOutput.innerHTML = input + " liters" + " = " + input * gallonConversion + " gallons " + " | " + input + " gallons" + " = " + input * litersConversion + " liters";

// MASS VARIABLES
let kilogramsConversion = 2.204;
let poundsConversion = 0.454;
let massOutput = document.querySelector(".mass_output_el");
massOutput.innerHTML = input + " kilograms" + " = " + input * kilogramsConversion + " pounds" + " " + " | " + input + " pounds" + " = " + input*poundsConversion + " kilograms";



}

// we need to figure out how to only show 3 decimal places.