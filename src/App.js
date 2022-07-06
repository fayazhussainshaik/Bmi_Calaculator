import React,{useState} from 'react'

import './index.css'


function App() {

//state
const [weight,setWeight] = useState(0)
const [height,setHeight] = useState(0)
const [bmi,setBmi] = useState('')
const [message,setMessage] = useState('')


let calcBmi = (event) => {
  //prevent default values
 event.preventDefault()

 if(weight <= 0 && height <= 0) {
  alert('Please enter valid weight and height.')
}else if(weight < 0 || weight === 0) {
   alert('Please enter valid weight.')
 }else if(height < 0 || height === 0){
   alert('Please enter valid height.')
 }else{
   let bmi = (weight / (height/100) ** 2)
   setBmi(bmi.toFixed(2))
    
   //logic for message
    if(bmi < 18.5){
      setMessage('You Are Underweight')
    }else if(bmi >= 18.5 && bmi <= 24.9){
      setMessage('You Are In Healthy Weight ')
    }else if(bmi >= 25 && bmi <= 29.9){
        setMessage('You Are In Over Weight ')}
    else {
      setMessage('You Are Obese')
    }

 }
}

let reload = () =>{
  window.location.reload()
}




  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div className='label'>
            <label>WEIGHT (Kg)</label>
            <input value={weight} onChange={(e)=> setWeight(e.target.value)} />
          </div>
          <div className='label'>
            <label>HEIGHT (Cm)</label>
            <input value={height} onChange={(event)=> setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>SUBMIT</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>RELOAD</button>
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
