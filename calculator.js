// const key__0 = document.querySelector("#buttons__0")
// const key__1 = document.querySelector("#buttons__1")
// const key__2 = document.querySelector("#buttons__2")
// const key__3 = document.querySelector("#buttons__3")
// const key__4 = document.querySelector("#buttons__4")
// const key__5 = document.querySelector("#buttons__5")
// const key__6 = document.querySelector("#buttons__6")
// const key__7 = document.querySelector("#buttons__7")
// const key__8 = document.querySelector("#buttons__8")
// const key__9 = document.querySelector("#buttons__9")
// const key__00 = document.querySelector("#buttons__00")
// const key__decimal = document.querySelector("#buttons__decimal")

const workingDisplay = document.querySelector("#buttons__subscreen")
const finalDisplay = document.querySelector("#buttons__screen")
const key__equal = document.querySelector("#buttons__equal")
const key__add = document.querySelector("#buttons__add")
const key__subtract = document.querySelector("#buttons__subtract")
const key__multiply = document.querySelector("#buttons__multiply")
const key__divide = document.querySelector("#buttons__divide")
const key__delete = document.querySelector("#buttons__delete")
const key__clear = document.querySelector("#buttons__clear")

// maybe could have all numbers stored in an array and all operations in another
// calculatorMemory.unshift(key[i])

const keys = document.querySelectorAll(".key")
const number = document.querySelectorAll(".number")
const operation = document.querySelectorAll(".operation")

let calculatorMemory = [];
// let 
let subDisplay="";
let mainDisplay = "";
let solution ="";
hasDot=false


const spliceAndReplace = (solution) => {
   calculatorMemory.splice(0,3,solution)
   console.log(calculatorMemory)
   console.log("spliceAndReplace is running")
}

const itsMathsTime = () => {
   if (calculatorMemory[1]===key__divide.innerHTML){
      // if (calculatorMemory[0]===""){
      // }
      // else{
      const division = `${Number(calculatorMemory[0])/Number(calculatorMemory[2])}`
         spliceAndReplace(division)
      // }
   }else if (calculatorMemory[1]===key__multiply.innerHTML){
      const multiplication = `${Number(calculatorMemory[0])*Number(calculatorMemory[2])}`
         spliceAndReplace(multiplication)
   }else if (calculatorMemory[1]===key__subtract.innerHTML){
      const subtraction = `${Number(calculatorMemory[0])-Number(calculatorMemory[2])}`
         spliceAndReplace(subtraction)
   }else if(calculatorMemory[1]===key__add.innerHTML){
      const addition = `${Number(calculatorMemory[0])+Number(calculatorMemory[2])}`
         spliceAndReplace(addition)
   }
}

// ==========================
// =========NUMBERS==========
// ==========================

for (let i = 0; i< number.length;i++) {
   number[i].addEventListener("click", ()=>{
      mainDisplay = `${mainDisplay}` + `${number[i].innerHTML}`
      finalDisplay.innerHTML = `${mainDisplay}`
      subDisplay= `${subDisplay}` + `${number[i].innerHTML}`
      workingDisplay.innerHTML = `${subDisplay}`
   })
}

// ==========================
// =========Operators========
// ==========================

for (let i = 0; i<operation.length;i++) {
   operation[i].addEventListener("click", ()=>{
      calculatorMemory.push(mainDisplay)
      calculatorMemory.push(operation[i].innerHTML)
      mainDisplay="";
      subDisplay= `${subDisplay}` + `${operation[i].innerHTML}`
      workingDisplay.innerHTML = `${subDisplay}`
      console.log(calculatorMemory)
      if (calculatorMemory.length===4 && calculatorMemory[2]!=""){
         itsMathsTime()
      }else if(calculatorMemory.length===4 && calculatorMemory[2]===""){
         newOperator=calculatorMemory[3]
         calculatorMemory.splice(1,3,newOperator)
         console.log(calculatorMemory)
         console.log("operator changed")
      }
   })
}

// ==========================
// ==========EQUAL==========
// ==========================

key__equal.addEventListener("click",()=> {
   calculatorMemory.push(mainDisplay)
   if (calculatorMemory.length===3){
      itsMathsTime()
      mainDisplay=`${calculatorMemory[0]}`;
      finalDisplay.innerHTML = `${mainDisplay}`
      calculatorMemory=[];
   }else{
      mainDisplay=`${calculatorMemory[0]}`;
      finalDisplay.innerHTML = `${mainDisplay}`
      calculatorMemory=[];
   }
})

// ==========================
// =========DELETE===========
// ==========================

key__delete.addEventListener("click",()=> {
   mainDisplay=mainDisplay.substring(0, mainDisplay.length - 1);
   finalDisplay.innerHTML = `${mainDisplay}`
   subDisplay=subDisplay.substring(0, subDisplay.length - 1);
   workingDisplay.innerHTML = `${subDisplay}`
   console.log("delete button pressed")
})

// ==========================
// =========CLEAR===========
// ==========================

key__clear.addEventListener("click",()=> {
   console.log("clear button pressed")
   mainDisplay="";
   subDisplay="";
   calculatorMemory=[];
   finalDisplay.innerHTML = `${mainDisplay}`
   workingDisplay.innerHTML = `${mainDisplay}`
})
