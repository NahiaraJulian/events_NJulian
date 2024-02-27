/*
1. Create an application that shows a gray square. It should have a “Change” button, 
which when clicked on, the fill color of the square should change to light blue.
Additional features: When you click again, the color of the square should change to red.
Make sure that every time there is a color change, the name of the color appears inside the square.
*/
/*
const button = document.getElementById("change_color")
button.addEventListener("click", (event) => {
    const div1 = document.getElementById("square")
    console.log("click", event);
    if (div1.className == "h-48 w-48 border border-slate-800 rounded-lg bg-gray-600") {
        div1.className = "h-48 w-48 border border-slate-800 rounded-lg bg-blue-300"
    }else if(div1.className == "h-48 w-48 border border-slate-800 rounded-lg bg-blue-300"){
        div1.className = "h-48 w-48 border border-slate-800 rounded-lg bg-red-300"
    }
    
})
*/

/*
2. Create an application that shows a gray square. It must have a text input, 
and when writing in it, what is being written must appear printed inside the square.
Additional features: Create a button to clear the content of the square.
*/
/*
const input = document.getElementById("input_text")
const buttonR = document.getElementById("reset")

input.addEventListener("change", (event) => {
    console.log("New text in", event.target)
    const div2 = document.getElementById("div_text")
    div2.textContent = `${input.value}`
})

buttonR.addEventListener("click", (event) =>{
    const div2 = document.getElementById("div_text")
    div2.textContent = ""
})
*/

/*
3. Create an application that calculates the body mass index. When you press the “calculate”
button, it should show the result in the corresponding input.
*/
/*
const buttonC = document.getElementById("calculate")

buttonC.addEventListener("click", (event) => {
    const div3 = document.getElementById("result")
    const height = document.getElementById("input_height")
    const weight = document.getElementById("input_weight")
    const potency = height.value ** 2 
    div3.innerText = `${weight.value/potency}`
})
*/
/*
4. Create a currency conversion application.
Taking by default 1 dollar = 500 (Argentine, Chilean, Uruguayan peso, etc.).
The user must be able to enter an amount in a local currency and it must be converted to 
its equivalent in dollars.
Additional features: The program must also be able to convert from dollars to local currency
and a button must also be included to clear the inputs.
*/

const buttonCalculate = document.getElementById("calculate_amount")

buttonCalculate.addEventListener("click", (event) => {
    const div4 = document.getElementById("result_dollars")
    const local = document.getElementById("local_currency")

    const result = local.value/840.64
    div4.innerText = `USD ${result.toFixed(3)}`
})


