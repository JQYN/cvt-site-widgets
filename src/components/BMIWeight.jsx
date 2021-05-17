import React, { useContext } from 'react';
import { BMIContext } from '../context/BMIContext';
import { useHistory } from 'react-router-dom';
import Weight from '../assets/imgs/weight.svg';

function BMIWeight() {
  const ctx = useContext(BMIContext);
  const h = useHistory();
  return (
    <div className='cal-container'>
      <div>
        <img
          src={Weight}
          alt='carton-weight'
          width='500'
          height='500'
          className='img-fluid'
          loading='lazy'
        />
        {/* <Weight /> */}
      </div>
      <div className='w-75'>
        <div className='mb-5'>
          <h3>What is your weight? (in kg)</h3>
        </div>
        <form
          className='container-fluid'
          onSubmit={(e) => {
            e.preventDefault();
            h.push('/bmi/height');
          }}
        >
          {/* Weight */}
          <div className='row mb-3'>
            {/* <label className='form-label'>Weight(in kg)</label> */}
            <input
              className='form-control'
              required
              type='number'
              min='10'
              maxLength='3'
              onChange={(e) => {
                ctx.weight = parseInt(e.target.value.slice(0, 3));
                e.target.value = ctx.weight
              }}
            ></input>
            <div className='invalid-feedback'>Please provide a valid value.</div>
          </div>

          <div className='row mb-3'>
            <button className='btn btn-primary' type='submit'>
              Next
            </button>
          </div>
          <div className='row mb-3'>
            <button
              className='btn btn-primary'
              type='button'
              onClick={() => h.push('/bmi/gender-age')}
            >
              Back to last step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMIWeight;
