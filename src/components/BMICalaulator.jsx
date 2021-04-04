import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { BMIContext, defaultCtx } from '../context/BMIContext';
import BMIGenderAndAge from './BMIGenderAndAge';
import BMIHeight from './BMIHeight';
import BMIResult from './BMIResult';
import BMIWeight from './BMIWeight';

function BMICalaulator() {
  return (
    <BMIContext.Provider value={defaultCtx}>
      <div
        className='container'
        style={{
          border: '3px',
          borderRadius: '25px',
          height: '100vh',
        }}
      >
        <Switch>
          <Route path='/bmi/gender-age'>
            <BMIGenderAndAge />
          </Route>
          <Route path='/bmi/weight'>
            <BMIWeight />
          </Route>
          <Route path='/bmi/height'>
            <BMIHeight />
          </Route>
          <Route path='/bmi/result'>
            <BMIResult />
          </Route>
          <Route path='/bmi'>
            <Redirect to='/bmi/gender-age' />
          </Route>
        </Switch>
      </div>
    </BMIContext.Provider>
  );
}

export default BMICalaulator;
