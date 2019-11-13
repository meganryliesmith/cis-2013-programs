/* This program challenges the user to guess a randomly generated number
 * within a range chosen by the user. Basic user input is validated to 
 * ensure numbers are entered and there are no guessing range violations
 * (such as choosing a number outside the high or low boundary of the range). 
 */


var intMax, intMin, intRandom, intGuess, intCount;

/* the following section prompts the user to enter the low number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 0.
*/

intMin = parseInt(prompt("Please enter a number 0 or greater for your minimum number")); //asks for a minimum number for the guessing game
while (isNaN(intMin)||intMin<0) {
    intMin = parseInt(prompt("Sorry. You need to enter a number greater or equal to 0 for your minimum number.")); //while loop validates that the minimum number is in fact greater than or equal to 0
}

/* the following section prompts the user to enter the high number of their guessing range
 * and then validates that the user entered an actual number and make sure that the
 * number is at least 2 more than the minimum (so that there is some guessing involved).
*/


intMax = parseInt(prompt("Please enter a number which is at least " + (intMin + 2))); //asks for a maximum number for the guessing game
while (isNaN(intMax)||intMax<(intMin+2)) {
    intMin = parseInt(prompt("Sorry. You need to enter a number greater than or equal to " + (intMin + 2) + "for your maximum number.")); //while loop validates that the maximum number is in fact two greater than the minimum value
}


intGuess = parseInt(prompt("Please enter a number between " + intMin + " and " + intMax));
while (isNaN(intGuess)||intGuess<intMin || intGuess>intMax) {
    intGuess = parseInt(prompt("Sorry. You need to enter a number between " + intMin + " and " + intMax)); //validates to make sure guess is within boundaries
}




















/*The following line of code generates the random number to be used in the guessing game.
 * Math.floor rounds the random number down to the nearest integer
 * Math.random() generates a random number between 0 and 1
 * the portion of (intMax-intMin +1) provides the range of random values
 * the addition of + intMin provides the floor for the random number 
 */
intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin); //chooses a random number that is within the boundaries
intCount = 1;
while(intGuess!=intRandom) { //gives responses for incorrect guesses
    if(intGuess<intRandom) { //output if guess is too low
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too low. Please guess again.")); 
        while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax) {
            intMin = parseInt(prompt("Sorry. You need to choose a number between " + intMin + " and " + intMax)); //validates to make sure guess is within boundaries
                
        }
    }else{ //output if guess is too high
        intGuess = parseInt(prompt("Your guess of " + intGuess + " is too high. Please guess again."));
        while(isNaN(intGuess)||intGuess<intMin||intGuess>intMax) {
            intMin = parseInt(prompt("Sorry. You need to choose a number between " + intMin + " and " + intMax)); //validates to make sure guess is within boundaries
        }
    }
    intCount++; //increases the number of attempted guesses each time the guess is incorrect
}


// set the loop counter



/* the following section prompts the user to enter their guess
 * and then validates that the user entered an actual number and makes sure that the
 * number is between the allowed max and min number choices.
*/






/* The following section provides the main loop and logic for the program.
 * The user's guess is compared to the randomly generated number and feedback
 * is given based upon whether the guess is higher or lower. The loop exits when
 * the user chooses the correct number. Each time through the loop updates the loop counter.
 */

 
 
 
 
 
 
 
 

// provides final output upon successful guessing
alert("Congratulations!!! You guessed the correct number (" + intRandom +")\n" +
		" and it only took you " + intCount + " attempts!");

