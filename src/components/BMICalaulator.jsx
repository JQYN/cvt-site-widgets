import React, { useState } from 'react';

function BMICalaulator() {
  const [weight, setWeight] = useState(10);
  const [height, setHeight] = useState(100);
  const [age, setAge] = useState(10);
  const [gender, setGender] = useState('male');

  const [isresult, setIsresult] = useState(false);

  function calculateBMI(weight, height) {
    height = height / 100;
    return Math.round(weight / (height * height));
  }

  function generateLink(weight, height, age, gender) {
    gender = gender === 'male' ? 'm' : 'f';
    return `https://www.cdc.gov/healthyweight/bmi/result.html?&method=metric&gender=${gender}&age_y=${age}&age_m=0&hcm=${height}&wkg=${weight}`;
  }

  const BMIform = (
    <div className='d-flex align-items-center flex-fill full-height'>
      <form
        className='container-fluid'
        onSubmit={(e) => {
          e.preventDefault();
          setIsresult(true);
        }}
      >
        {/* Weight */}
        <div className='row mb-3'>
          <label className='form-label'>Weight(in kg)</label>
          <input
            className='form-control'
            required
            type='number'
            min='10'
            onChange={(e) => setWeight(e.target.value)}
          ></input>
          <div className='invalid-feedback'>Please provide a valid value.</div>
        </div>
        {/* Height */}
        <div className='row mb-3'>
          <label className='col-form-label'>Height(in cm)</label>
          <input
            className='form-control'
            required
            type='number'
            min='10'
            onChange={(e) => setHeight(Math.round(e.target.value, 1))}
          ></input>
          <div className='invalid-feedback'>Please provide a valid value.</div>
        </div>
        {/* Age */}
        <div className='row mb-3'>
          <label className='col-form-label'>Age</label>
          <input
            className='form-control'
            required
            type='number'
            min='3'
            onChange={(e) => setAge(Math.round(e.target.value))}
          ></input>
          <div className='invalid-feedback'>Please provide a valid value.</div>
        </div>
        {/* Gender */}
        <div className='row mb-3'>
          <label className='col-form-label'>Gender</label>
          <select
            className='form-select'
            onChange={(e) => {
              setGender(e.target.value);
            }}
          >
            <option selected>male</option>
            <option>female</option>
          </select>
        </div>
        <div className='row mb-3'>
          <button className='btn btn-primary' type='submit'>
            Get My BMI
          </button>
        </div>
      </form>
    </div>
  );
  const score = (
    <div className='center full-height'>
      <div>
        <div className='mb-3 row'>
          <p className='text-center'>
            My Score is : {calculateBMI(weight, height)}
          </p>
          <a
            href={generateLink(weight, height, age, gender)}
            target='_blank'
            rel='noreferrer'
            className='text-center'
          >
            I want to know more about it
          </a>
        </div>
        <div className='row mb-3'>
          <button
            className='btn btn-primary'
            onClick={(e) => {
              setIsresult(false);
            }}
          >
            Test again
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className='container'
      style={{
        height: '100vh',
      }}
    >
      {isresult ? score : BMIform}
    </div>
  );
}

export default BMICalaulator;
