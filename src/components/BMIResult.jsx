import React, { useContext } from 'react';
import { BMIContext } from '../context/BMIContext';
import sadHeart from '../assets/imgs/hearts/sad.svg';
import overweight from '../assets/imgs/hearts/oh-no.svg';
import normal from '../assets/imgs/hearts/happy.svg';
import overweightScale from '../assets/imgs/Overweight.png';
import obeseScale from '../assets/imgs/Obese.png';
import normalScale from '../assets/imgs/Normal.png';
import underweightScale from '../assets/imgs/Underweight.png';

import { useHistory } from 'react-router-dom';

function BMIResult() {
  const { gender, weight, age, height } = useContext(BMIContext);
  let score = calculateBMI(weight, height);
  const h = useHistory();

  const obesityText = (
    <div>
      <img src={obeseScale} alt='obese-scale' width='450px'></img>
      <p>
        Things are not looking too bright here! You should talk to your parents about this. You seem
        to weigh more than 95% of people in your age group, this can be dangerous if not addressed
        in time. Ask your parents to contact your family doctor and seek advice. It’s never too late
        to get fit!
      </p>
    </div>
  );

  const normalText = (
    <div>
      <img src={normalScale} alt='normal-scale' width='450px'></img>
      <p>
        Hooray! You seem to be healthy and weigh very well for your age group. Keep eating those
        leafy greens and doing those exercises and you’ll grow up to be a strong person.
      </p>
    </div>
  );

  const overweightText = (
    <div>
      <img src={overweightScale} alt='overweight-scale' width='450px'></img>
      <p>
        Shoot! You seem to love food a little more than people around you, and it shows. Don’t worry
        though with adding the right amount of exercises and healthy foods to your diet, you can run
        all you want and not get tired!
      </p>
    </div>
  );

  const underweightText = (
    <div>
      <img src={underweightScale} alt='underweight-scale' width='450px'></img>
      <p>
        Oh No! Looks like you’re a little Underweight for people of your age. Don’t worry, with a
        little modification in your diet, you can grow up from this and be stronger than before!
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

  // function generateLink(weight, height, age, gender) {
  //   gender = gender === 'boy' ? 'm' : 'f';
  //   return `https://www.cdc.gov/healthyweight/bmi/result.html?&method=metric&gender=${gender}&age_y=${age}&age_m=0&hcm=${height}&wkg=${weight}`;
  // }

  return (
    <div className='cal-container'>
      <div className=''>
        <img
          src={getPic(score)}
          alt='result-carton'
          className='img-fluid'
          width='250'
          height='250'
        />
      </div>
      <div className='w-75'>
        <h3>My BMI is {score}</h3>
        {getResultText(score)}
        <a
          href='https://www.cdc.gov/healthyweight/assessing/bmi/childrens_bmi/about_childrens_bmi.html'
          target='_blank'
          rel='noreferrer'
          className='text-center'
        >
          Parents: Click here to know more
        </a>
        <div className='mb-3 mt-3'>
          <button
            className='btn btn-primary'
            type='button'
            onClick={() => h.push('/bmi/gender-age')}
          >
            Test Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default BMIResult;
