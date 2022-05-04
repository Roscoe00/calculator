const workingDisplay = document.querySelector("#buttons__subscreen")
const finalDisplay = document.querySelector("#buttons__screen")

const key__decimal = document.querySelector("#buttons__decimal")
const key__minus = document.querySelector("#buttons__minus")

const key__equal = document.querySelector("#buttons__equal")
const key__add = document.querySelector("#buttons__add")
const key__subtract = document.querySelector("#buttons__subtract")
const key__multiply = document.querySelector("#buttons__multiply")
const key__divide = document.querySelector("#buttons__divide")

const key__delete = document.querySelector("#buttons__delete")
const key__clear = document.querySelector("#buttons__clear")

const number = document.querySelectorAll(".number")
const operation = document.querySelectorAll(".operation")

let calculatorMemory = [];
let subDisplay = "";
let mainDisplay = "";
let solution = "";

const spliceAndReplace = (solution) => {
   calculatorMemory.splice(0, 3, solution)
   // console.log(calculatorMemory)
   // console.log("spliceAndReplace is running")
}

const itsMathsTime = () => {
   if (calculatorMemory[1] === key__divide.innerHTML && calculatorMemory[2] != 0) {
      const division = `${Number(calculatorMemory[0]) / Number(calculatorMemory[2])}`
      spliceAndReplace(division)
   } else if (calculatorMemory[1] === key__multiply.innerHTML) {
      const multiplication = `${Number(calculatorMemory[0]) * Number(calculatorMemory[2])}`
      spliceAndReplace(multiplication)
   } else if (calculatorMemory[1] === key__subtract.innerHTML) {
      const subtraction = `${Number(calculatorMemory[0]) - Number(calculatorMemory[2])}`
      spliceAndReplace(subtraction)
   } else if (calculatorMemory[1] === key__add.innerHTML) {
      const addition = `${Number(calculatorMemory[0]) + Number(calculatorMemory[2])}`
      spliceAndReplace(addition)
   } else {
      spliceAndReplace(0);
   }

}

// ==========================
// =========NUMBERS==========
// ==========================

for (let i = 0; i < number.length; i++) {
   number[i].addEventListener("click", () => {
      mainDisplay = `${mainDisplay}` + `${number[i].innerHTML}`
      finalDisplay.innerHTML = `${mainDisplay}`
      subDisplay = `${subDisplay}` + `${number[i].innerHTML}`
      workingDisplay.innerHTML = `${subDisplay}`
   })
}

// ==========================
// ====decimal and minus=====
// ==========================

key__decimal.addEventListener("click", () => {
   if (mainDisplay.includes(".")) {
   } else {
      mainDisplay = `${mainDisplay}` + `${key__decimal.innerHTML}`
      finalDisplay.innerHTML = `${mainDisplay}`
      subDisplay = `${subDisplay}` + `${key__decimal.innerHTML}`
      workingDisplay.innerHTML = `${subDisplay}`
   }
})

key__minus.addEventListener("click", () => {
   if (mainDisplay.indexOf("-") === -1) {
      mainDisplay = "-" + `${mainDisplay}`
      finalDisplay.innerHTML = `${mainDisplay}`
      if (subDisplay.includes(mainDisplay.substring(1, mainDisplay.length))) {
         subDisplay = `${subDisplay.substring(0, subDisplay.length - mainDisplay.length + 1)}` + `${mainDisplay}`
         workingDisplay.innerHTML = `${subDisplay}`
      } else {
         subDisplay = `${mainDisplay}`
         workingDisplay.innerHTML = `${subDisplay}`
      }
   } else if (mainDisplay.includes("-")) {
      subDisplay = subDisplay.substring(0, subDisplay.indexOf("-")) + subDisplay.substring(subDisplay.indexOf("-") + 1, subDisplay.length);
      workingDisplay.innerHTML = `${subDisplay}`
      mainDisplay = mainDisplay.substring(1, mainDisplay.length);;
      finalDisplay.innerHTML = `${mainDisplay}`
   }
})


// ==========================
// =========Operators========
// ==========================

//could add reset for operations when more than 2 are done in a row e.g.2+3+5

for (let i = 0; i < operation.length; i++) {
   operation[i].addEventListener("click", () => {
      calculatorMemory.push(mainDisplay)
      calculatorMemory.push(operation[i].innerHTML)
      mainDisplay = "";
      // console.log(calculatorMemory)
      if (subDisplay.charAt(subDisplay.length - 1) === key__multiply.innerHTML ||
         subDisplay.charAt(subDisplay.length - 1) === key__divide.innerHTML ||
         subDisplay.charAt(subDisplay.length - 1) === key__add.innerHTML ||
         subDisplay.charAt(subDisplay.length - 1) === key__subtract.innerHTML) {
         subDisplay = `${subDisplay.substring(0, subDisplay.length - 1)}` + `${operation[i].innerHTML}`
         workingDisplay.innerHTML = `${subDisplay}`
      } else {
         subDisplay = `${subDisplay}` + `${operation[i].innerHTML}`
         workingDisplay.innerHTML = `${subDisplay}`
      }
      if (calculatorMemory.length === 4 && calculatorMemory[2] != "") {
         itsMathsTime()
      } else if (calculatorMemory.length === 4 && calculatorMemory[2] === "") {
         newOperator = calculatorMemory[3]
         calculatorMemory.splice(1, 3, newOperator)
         // console.log(calculatorMemory)
         // console.log("operator changed")
      }
   })
}

// ==========================
// ==========EQUAL==========
// ==========================

key__equal.addEventListener("click", () => {
   calculatorMemory.push(mainDisplay)
   if (calculatorMemory.length === 3) {
      itsMathsTime()
      mainDisplay = `${calculatorMemory[0]}`;
      finalDisplay.innerHTML = `${mainDisplay}`
      calculatorMemory = [];
   } else {
      mainDisplay = `${calculatorMemory[0]}`;
      finalDisplay.innerHTML = `${mainDisplay}`
      calculatorMemory = [];
   }
   subDisplay = mainDisplay;
})

// ==========================
// =========DELETE===========
// ==========================

key__delete.addEventListener("click", () => {
   if (subDisplay.includes(mainDisplay, -1) && mainDisplay != "") {
      mainDisplay = mainDisplay.substring(0, mainDisplay.length - 1);
      finalDisplay.innerHTML = `${mainDisplay}`
      subDisplay = subDisplay.substring(0, subDisplay.length - 1);
      workingDisplay.innerHTML = `${subDisplay}`
   } else if (subDisplay.includes(mainDisplay, -1) && mainDisplay === "") {
   } else {
      mainDisplay = mainDisplay.substring(0, mainDisplay.length - 1);
      finalDisplay.innerHTML = `${mainDisplay}`
      subDisplay = mainDisplay;
      workingDisplay.innerHTML = `${subDisplay}`
      //    // console.log("delete button pressed")
   }
})


// ==========================
// =========CLEAR===========
// ==========================

key__clear.addEventListener("click", () => {
   // console.log("clear button pressed")
   mainDisplay = "";
   subDisplay = "";
   calculatorMemory = [];
   finalDisplay.innerHTML = `${mainDisplay}`
   workingDisplay.innerHTML = `${mainDisplay}`
})
