import React ,{ useState} from "react"
import './App.css';

function App() {
  const [result,setResult] = useState("");
  const handleclick = (e) => {
    setResult(result.toString().concat(e.target.name));
  }
  const clear = () =>{
    setResult("");
  }
  const backspace = () => {
    setResult(result.toString().slice(0, -1));
  }
    const equal = () => {
    try{
      setResult(eval(result.toString()));
    } catch(err){
      setResult("error")
    }
   
  }
  return (
    <>
  <div class="calculator">
    <input type="text" id="display" value={result}/>
    <div class="buttons">
    <button class="zero" onClick={backspace}>Clear</button>
      <button  class="operator" onClick={clear}>C</button>
      <button name="/" onClick={handleclick} class="operator">&divide;</button>
      <button name="7" onClick={handleclick}>7</button>
      <button name="8" onClick={handleclick}>8</button>
      <button name="9" onClick={handleclick}>9</button>
      <button name="*" onClick={handleclick} class="operator">&times;</button>
      <button name="4" onClick={handleclick}>4</button>
      <button name="5" onClick={handleclick}>5</button>
      <button name="6" onClick={handleclick}>6</button>
      <button name="-" onClick={handleclick} class="operator">-</button>
      <button name="1" onClick={handleclick}>1</button>
      <button name="2" onClick={handleclick}>2</button>
      <button name="3" onClick={handleclick}>3</button>
      <button name="+" onClick={handleclick} class="operator">+</button>
      <button name="." onClick={handleclick}>.</button>
      <button name="0" onClick={handleclick}>0</button>
      <button class="zero" onClick={equal}>=</button>
    </div>
  </div>
    </>
  );
}

export default App;
