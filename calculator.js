const key__0 = document.querySelector("#buttons__0").value="0";
const key__1 = document.querySelector("#buttons__1").value="1";
const key__2 = document.querySelector("#buttons__2").value="2";
const key__3 = document.querySelector("#buttons__3").value="3";
const key__4 = document.querySelector("#buttons__4").value="4";
const key__5 = document.querySelector("#buttons__5").value="5";
const key__6 = document.querySelector("#buttons__6").value="6";
const key__7 = document.querySelector("#buttons__7").value="7";
const key__8 = document.querySelector("#buttons__8").value="8";
const key__9 = document.querySelector("#buttons__9").value="9";
const key__00 = document.querySelector("#buttons__00").value="00";
const key__decimal = document.querySelector("#buttons__decimal").value=".";
// const key__equal = document.querySelector("#buttons__equal")
// const key__add = document.querySelector("#buttons__add")
// const key__subtract = document.querySelector("#buttons__subtract")
// const key__multiply = document.querySelector("#buttons__multiply")
// const key__divide = document.querySelector("#buttons__divide")
const key__delete = document.querySelector("#buttons__delete")
const key__clear = document.querySelector("#buttons__clear")

// maybe could have all numbers stored in an array and all operations in another
// calculatorDisplay.unshift(key[i])

 const number = document.querySelectorAll(".number")
// const operation = document.querySelectorAll(".operation")
const clear = document.querySelector(".clear")
const remove = document.querySelector(".delete")

const calculatorDisplay = [];

const keys = [key__0,key__1,key__2,key__3,key__4,key__5,key__6,key__7,key__8,key__9,key__00,key__decimal] 

for (let i = 0; i<= keys.length;i++) {
   number[i].addEventListener("click", ()=>{
      calculatorDisplay.push(keys[i])
      console.log(calculatorDisplay)
   })
}

remove.addEventListener("click",()=> {
   calculatorDisplay.pop();
})

clear.addEventListener("click",()=> {
   calculatorDisplay.length=0
})

// btn.addEventListener("click",()=>{
//    calculatorDisplay.innerHTML = calculatorDisplay.value
// })

// console.log(keys)
// const activeCalculatorDisplay = (keys) => {

// } 
