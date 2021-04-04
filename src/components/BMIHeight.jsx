import React, { useContext } from 'react';
import { BMIContext } from '../context/BMIContext';
import height from '../assets/imgs/height.svg';
import { useHistory } from 'react-router-dom';

function BMIHeight() {
  const context = useContext(BMIContext);
  const h = useHistory();
  return (
    <div className='cal-container'>
      <div>
        <img src={height} alt='carton-height' className='img-fluid' width='500' height='500' />
      </div>
      <div className='w-75'>
        <h3 className='mb-5'>What is your height? (in cm)</h3>
        <form
          className='container-fluid'
          onSubmit={(e) => {
            e.preventDefault();
            h.push('/bmi/result');
          }}
        >
          {/* Height */}
          <div className='row mb-3'>
            {/* <label className='col-form-label'>Height(in cm)</label> */}
            <input
              className='form-control'
              required
              type='number'
              min='10'
              onChange={(e) => (context.height = Math.round(e.target.value, 1))}
            />
          </div>

          <div className='row mb-3'>
            <button className='btn btn-primary' type='submit'>
              Next
            </button>
          </div>
          <div className='row mb-3'>
            <button className='btn btn-primary' type='button' onClick={() => h.push('/bmi/weight')}>
              Back to last step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMIHeight;
