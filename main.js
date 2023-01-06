// se usa para crear un numero ramdon
const num1 = Math.ceil(Math.random()*10); 
const num2 = Math.ceil(Math.random()*10); 


// elemento de pregunta
const questionE2 = document.getElementById("question"); 
const inputE2 = document.getElementById("input"); 
const formE2 = document.getElementById("form"); 


// elemento del localStorage
let score = JSON.parse(localStorage.getItem("score")); 
questionE2.innerText = `¿Cuanto es ${num1} multiplicado por ${num2}?`; 


// para evitar error
const scoreE2 = document.getElementById("score"); 
if(!score){
    score = 0; 
}
scoreE2.innerHTML = `score: ${score}`; 


// elemento de respuestas
const correctAns = num1 * num2; 


// elemento de llamado de evento (al dár click)
formE2.addEventListener("submit",()=>{
    const userAns = +inputE2.value;
    if(userAns === correctAns){
        score++; 
        updateLocalStorage(); 
    }else{
        score--; 
        updateLocalStorage(); 
    }
    

}); 

function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score)); 
}












//codigo generado para evitar que se envien los valores ingresador (event.preventDefault() )
// formEl.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const userAns = inputEl.value;
//     console.log(userAns, typeof userAns);
//   });
  



// https://www.youtube.com/watch?v=EWv2jnhZErc
// 1.20


