import React,{useState} from "react";

import style from './guessNomber.module.css'

export default function GuessNomber(){
    const [luckyNumber] = useState(Math.floor(Math.random() * 100) + 1);
    const [guess, setGuess] = useState("");
    const [message, setMessage] = useState("");
    const [count, setCount] = useState(0);
    function handleGuess(event) {
        event.preventDefault();
        setCount(count + 1);
        if (guess < luckyNumber) {
          setMessage("You guessed a smaller number.");
        } else if (guess > luckyNumber) {
          setMessage("You guessed a bigger number.");
        } else {
          setMessage(`Congratulations! You guessed the right number in ${count} attempts.`);
        }
      }
    return(
        <div  className={style.container}>
            <div >
              <form onSubmit={handleGuess}>
               
                   <div  className={style.heading}>
                     <h2  >Guess the lucky number (between 1 and 100)</h2>
                   </div>
                   <input  type="number" value={guess} onChange={(event) => setGuess(event.target.value)} />
                
                   <button   type="submit">Guess</button>
            </form>
                   <h3 className={style.msg} >{message}</h3>
           </div>
   
        </div>
    )
}