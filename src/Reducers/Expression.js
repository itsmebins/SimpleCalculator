import { EXPRESSION_UPDATE } from '../Actions/types.js';

  const INITIAL_STATE = { expressionStr: '' };

  export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case EXPRESSION_UPDATE:
      console.log(state);
      return { ...state, expressionStr: action.payload };
      default:
      return state;
    }
  };
