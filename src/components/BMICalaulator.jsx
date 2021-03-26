import React, { useState } from 'react';

function BMICalaulator() {
  const [weight, setWeight] = useState(10);
  const [height, setHeight] = useState(10);
  const [isresult, setIsresult] = useState(false);

  function calculateBMI(weight, height) {
    height = height / 100;
    return Math.round(weight / (height * height));
  }

  const BMIform = (
    <form className='row needs-validation'>
      <div className='row mb-3'>
        <label className='col-form-label'>Weight</label>
        <input
          className='form-control'
          required
          type='number'
          min='10'
          onChange={(e) => setWeight(e.target.value)}
        ></input>
        <div class='invalid-feedback'>Please provide a valid value.</div>
      </div>
      <div className='row mb-3'>
        <label className='col-form-label'>Height(in cm)</label>
        <input
          className='form-control'
          required
          type='number'
          min='10'
          onChange={(e) => setHeight(e.target.value)}
        ></input>
        <div class='invalid-feedback'>Please provide a valid value.</div>
      </div>
      <div className='row mb-3'>
        <button class='btn btn-primary' onClick={(e) => setIsresult(true)}>
          Get My BMI
        </button>
      </div>
    </form>
  );
  const score = (
    <div className='position-absolute top-50 start-50'>
      <p>My Score is : {calculateBMI(weight, height)}</p>
    </div>
  );
  return (
    <div
      className='conatiner'
      style={{
        marginLeft: 32,
        maxWidth: 350,
      }}
    >
      {isresult ? score : BMIform}
    </div>
  );
}

export default BMICalaulator;
