const realDisplay = document.querySelector("#buttons__screen")
const key__equal = document.querySelector("#buttons__equal")
const key__add = document.querySelector("#buttons__add")
const key__subtract = document.querySelector("#buttons__subtract")
const key__multiply = document.querySelector("#buttons__multiply")
const key__divide = document.querySelector("#buttons__divide")
const key__delete = document.querySelector("#buttons__delete")
const key__clear = document.querySelector("#buttons__clear")

// maybe could have all numbers stored in an array and all operations in another
// calculatorDisplay.unshift(key[i])

const keys = document.querySelectorAll(".key")
const number = document.querySelectorAll(".number")
const operation = document.querySelectorAll(".operation")

let calculatorDisplay = [];

for (let i = 0; i< keys.length;i++) {
   keys[i].addEventListener("click", ()=>{
      calculatorDisplay.push(keys[i].innerHTML)
      console.log(calculatorDisplay)
      realDisplay.innerHTML = `${calculatorDisplay.join("")}`
})
}

// key__equal


key__delete.addEventListener("click",()=> {
   calculatorDisplay.pop();
   console.log("delete button pressed")
   realDisplay.innerHTML = `${calculatorDisplay.join("")}`
})

key__clear.addEventListener("click",()=> {
   console.log("clear button pressed")
   calculatorDisplay=[];
   realDisplay.innerHTML = `${calculatorDisplay.join("")}`
})
