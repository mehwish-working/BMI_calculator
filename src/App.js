import './App.css';
import './index.css';
import React, { useState } from 'react';

function App() {

  // state
  const [weight, setWeight] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || heightFeet === 0 || heightInches === 0) {
      alert('Please enter a valid weight and height');
    } else {
      let heightInMeters = ((parseInt(heightFeet) * 12) + parseInt(heightInches)) * 0.0254;
      let bmi = weight / (heightInMeters * heightInMeters);
      setBmi(bmi.toFixed(1));

      // Logic for message
      if (bmi < 18.5) {
        setMessage('You are underweight');
      } else if (bmi >= 18.5 && bmi < 24.9) {
        setMessage('You are healthy');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (kg)</label>
            <input value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height (feet and inches)</label>
            <div>
              <input
                value={heightFeet}
                onChange={(e) => setHeightFeet(e.target.value)}
                placeholder="Feet"
                style={{ width: '48%', marginRight: '4%' }}
              />
              <input
                value={heightInches}
                onChange={(e) => setHeightInches(e.target.value)}
                placeholder="Inches"
                style={{ width: '48%' }}
              />
            </div>
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='button'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
