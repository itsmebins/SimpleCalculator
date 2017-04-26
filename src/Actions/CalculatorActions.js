import { EXPRESSION_UPDATE } from './types.js';

export const userInputUpdate = (pressedKey) => {
  return {
    type: EXPRESSION_UPDATE,
    payload: pressedKey
  };
};
