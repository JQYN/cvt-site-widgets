import React, { useContext } from 'react';
import { BMIContext } from '../context/BMIContext';
import sadHeart from '../assets/imgs/hearts/sad.svg';
import overweight from '../assets/imgs/hearts/oh-no.svg';
import normal from '../assets/imgs/hearts/happy.svg';
import overweightScale from '../assets/imgs/overweight.svg';
import obeseScale from '../assets/imgs/obese.svg';
import normalScale from '../assets/imgs/normal.svg';
import underweightScale from '../assets/imgs/underweight.svg';

import { useHistory } from 'react-router-dom';

function BMIResult() {
  const { gender, weight, age, height } = useContext(BMIContext);
  let score = calculateBMI(weight, height);
  const h = useHistory();

  const obesityText = (
    <div>
      <img src={obeseScale} alt='obese-scale' width='450px'></img>
      <p>
        You are <span style={{ color: 'red' }}>AT HIGH RISK </span>
        for obesity-related diseases
      </p>
    </div>
  );

  const normalText = (
    <div>
      <img src={normalScale} alt='normal-scale' width='450px'></img>
      <p>
        You are <span style={{ color: 'green' }}>AT LOW RISK </span>
        for obesity-related diseases
      </p>
    </div>
  );

  const overweightText = (
    <div>
      <img src={overweightScale} alt='overweight-scale' width='450px'></img>
      <p>
        You are <span style={{ color: 'orange' }}>AT MODERATE RISK </span>
        for obesity-related diseases
      </p>
    </div>
  );

  const underweightText = (
    <div>
      <img src={underweightScale} alt='underweight-scale' width='450px'></img>
      <p>
        You are <span>AT LOW RISK</span> for obesity-related diseases but at risk of other clinical problems
      </p>
    </div>
  );

  function getResultText(score) {
    if (score >= 22) {
      //Obese
      return obesityText;
    } else if (score >= 18 && score < 22) {
      //Overweight
      return overweightText;
    } else if (score >= 13.7 && score < 18) {
      //Normal or Healthy Weight
      return normalText;
    } else if (score < 13.7) {
      //Underweight
      return underweightText;
    }
  }

  function calculateBMI(weight, height) {
    height = height / 100;
    return Math.round(weight / (height * height));
  }

  function getPic(score) {
    if (score >= 22) {
      //Obese
      return sadHeart;
    } else if (score >= 18 && score < 22) {
      //Overweight
      return overweight;
    } else if (score >= 13.7 && score < 18) {
      //Normal or Healthy Weight
      return normal;
    } else if (score < 13.7) {
      //Underweight
      return sadHeart;
    }
  }

  function generateLink(weight, height, age, gender) {
    gender = gender === 'boy' ? 'm' : 'f';
    return `https://www.cdc.gov/healthyweight/bmi/result.html?&method=metric&gender=${gender}&age_y=${age}&age_m=0&hcm=${height}&wkg=${weight}`;
  }

  return (
    <div className='cal-container'>
      <div className=''>
        <img src={getPic(score)} alt='result-carton' className='img-fluid' width='250' height='250' />
      </div>
      <div className='w-75'>
        <h3>My BMI is {score}</h3>
        {getResultText(score)}
        <a href={generateLink(weight, height, age, gender)} target='_blank' rel='noreferrer' className='text-center'>
          Parents: Click here to know more
        </a>
        <div className='mb-3 mt-3'>
          <button className='btn btn-primary' type='button' onClick={() => h.push('/bmi/gender-age')}>
            Test Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default BMIResult;
