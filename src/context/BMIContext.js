import { createContext } from 'react';

export let defaultCtx = {
  gender: 'boy',
  age: 10,
  weight: 10,
  height: 10,
};
export const BMIContext = createContext(defaultCtx);
