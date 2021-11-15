# calculator
Here is a calculator that can perform all 4 basic mathematic operations, addition, subtraction, multiplication and division. 
It has a clear button that will reset the calculator to have no stored infromation or inputs as well as a delete button that can delete the last number pressed.
I have also included a decimal point button to allow the use of decimal numbers as well as a sign change button to swap a number from positive to negative or vice versa.
The current input or solution is displayed in the larger text on the calculator whereas a collection of the inputs and numbers pressed is shown above it.

About the javascript
All non-number keys were set to separate constants to allow individual changes to be made to each, all numbers are part of the same group as they all function the same.
I set calcualtorMemory to be an empty array as this is where key presses are stored and set the next 3 variables as empty strings as they're used for the changing displays.

All items put into the array are either a string of numbers (including decimal and negative sign), or an operator. The number string is only stored once an operator is pressed
and there for numbers are always inside even entries of the array (0,2...) whereas operators are always stored at an odd index. This is used in the funciton "itsMathsTime" which 
identifies the operation at index[1] and uses an if statement in order to perform the correct action. The other function spliceAndReplace simply removes the numbers that 
itsMathsTime is perfomed on and replaces their array positions with the solution.

A for loop around an event listener for clicks on the number keys, places the pressed values into both the displays as a string.

The decimal click event contains an if statement to prevent it from doing anything if the current number already contains a decimal.

The key_minus click event first checks if there is a negative in the main display, if there isn't it places one at the start of the string. Then a nested if statement looks to
see if the subscreen already contains the main display, if so it places the negative infront of the appropriate number, otherwise it replaces the subscreen with the current 
mainscreen as the swap to a negative makes the previous calculations invalid.

Once again I have a for statement to display the operator key that is pressed. On click the current mainDisplay numberstring as well as the operator pressed are stored in the 
calculatorMemory array. Then an if statement checks if an operator was the last thing pressed before this one, if so it replaces the previous operator with the newly pressed one
in the subdisplay. otherwise it is added normally. Finally a different if statement checks the length of the calculator memory array. If it meets the requirements then the 
itsMathsTimes function is run, if only the array lenght requirement is met then the symbol is replaced by the new one as this can only be achieved if 2 operators are pressed in a row.

The equals also checks the length of the array and either runs itsMathsTime to find the solution or ignores the inupt, but displays the solution on the mainDisplay. The 
calculator memory is then emptied for the next calculation. otherwise the display doesnt change and again the memory is emptied (this is so that equals doesnt effect the
position of any later inputs into the memory array).

The delete key checks between the subdisplay and the main display and only deletes on both if the number at the ends match, otherwise it only removes numbers from the main display,
this is to keep the subdisplay maths consistent.

Finally the clear button empties all changeable variables and resets both displays.
