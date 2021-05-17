import { createContext } from 'react';

export let defaultCtx = {
  gender: 'boy',
  age: 10,
  weight: 30,
  height: 100,
};
export const BMIContext = createContext(defaultCtx);
