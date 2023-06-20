import './App.css';
import icon from './images/icon-dice.svg';
import dividerDesk from './images/pattern-divider-desktop.svg';
import { useState } from 'react';


function App() {

  const [id, setId] = useState('');
  const [advice, setAdvice] = useState('');


  const click = () =>{
    fetch("https://api.adviceslip.com/advice")
    .then(response => response.json())
    .then(data => {
      setId(data.slip.id)
      setAdvice(data.slip.advice)
    })
    .catch(error => {
      console.log(error);
    });

  }

  return (
    <div className="App">
      <div className='Main'>
        <div>
          <p>A D I V I C E   #{id}</p>
        </div>
        <div className='advice'>
          <h1>{advice}</h1>
        </div>
        <div className='divisor'>
          <img src={dividerDesk} alt='divisor'></img>
        </div>
        <div className='btn'>
          <button onClick={click}>
            <img src={icon} alt='generator'></img>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
