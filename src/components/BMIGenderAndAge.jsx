import React, { useContext, useRef, useEffect } from 'react';
import { BMIContext } from '../context/BMIContext';
import avacado from '../assets/imgs/avocado.svg';
import { useHistory } from 'react-router-dom';
import { Modal } from 'bootstrap';

function BMIGenderAndAge() {
  const ctx = useContext(BMIContext);
  const h = useHistory();
  const modelRef = useRef();

  useEffect(() => {
    const modalEl = modelRef.current;
    const modal = new Modal(modalEl, { backdrop: 'static' });
    modal.show();
  }, []);

  function hideModal() {
    const modalEl = modelRef.current;
    const modal = Modal.getInstance(modalEl);
    modal.hide();
  }

  return (
    <div className='cal-container'>
      {/* modal start */}
      <div
        ref={modelRef}
        class='modal fade'
        id='staticBackdrop'
        data-bs-backdrop='static'
        data-bs-keyboard='false'
        tabindex='-1'
        aria-labelledby='staticBackdropLabel'
        aria-hidden='true'
      >
        <div class='modal-dialog'>
          <div class='modal-content'>
            <div class='modal-header'>
              <h5 class='modal-title' id='staticBackdropLabel'>
                Note to parent:
              </h5>
            </div>
            <div class='modal-body'>
              <p>
                This calculator provides body mass index (BMI) for children ages 8 through 10 years. Please keep in mind
                that this BMI calculator is not meant to serve as a source of clinical guidance and is not intended to
                be a substitute for professional medical advice. Because BMI is based on weight and height, it is only
                an indicator of body fatness. Individuals with the same BMI may have different amounts of body fat.
              </p>
            </div>
            <div class='modal-footer'>
              <button type='button' class='btn btn-secondary'>
                No, I am not sure
              </button>
              <button
                type='button'
                class='btn btn-primary'
                // data-bs-dismiss='modal'
                onClick={() => hideModal()}
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* modal end */}
      <div>
        <img src={avacado} alt='cut-avacado' className='img-fluid' width='500' height='500' />
      </div>
      <div className='w-75'>
        <div style={{ textAlign: 'center' }}>
          <h3>BMI stands for Body Mass Index</h3>
          <p>It tells you how fit you are!</p>
          <p>
            You can measure your body mass index using your weight and height. You may ask a parent to help! Go ahead,
            Put in your measurements bellow to find out you BMI!
          </p>
        </div>

        <form
          className='container-fluid'
          onSubmit={(e) => {
            e.preventDefault();
            h.push('/bmi/weight');
          }}
        >
          {/* Age */}
          <div className='row mb-3'>
            <label className='col-form-label'>Age</label>
            <input
              className='form-control'
              required
              type='number'
              min='3'
              max='120'
              onChange={(e) => (ctx.age = Math.round(e.target.value))}
            ></input>
          </div>
          {/* Gender */}
          <div className='row mb-3'>
            <label className='col-form-label'>Gender</label>
            <select
              className='form-select'
              onChange={(e) => {
                ctx.gender = e.target.value;
              }}
            >
              <option selected>Boy</option>
              <option>Girl</option>
            </select>
          </div>

          <div className='row mb-3'>
            <button className='btn btn-primary' type='submit'>
              Next
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BMIGenderAndAge;
