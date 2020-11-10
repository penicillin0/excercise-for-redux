import { Action } from "redux";

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";

interface IncrementAction extends Action {
  type: typeof INCREMENT;
}
export const increment = (): IncrementAction => {
  return {
    type: INCREMENT,
  };
};

interface DecrementAction extends Action {
  type: typeof DECREMENT;
}
export const decrement = (): DecrementAction => {
  return {
    type: DECREMENT,
  };
};

export type CounterActions = IncrementAction | DecrementAction;
