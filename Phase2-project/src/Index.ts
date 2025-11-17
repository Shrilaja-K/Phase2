import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";

const logger = createLogger();

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

export function buycake() {
  return { type: BUY_CAKE };
}

export function buyIcecream() {
  return { type: BUY_ICECREAM };
}

const initialCakesState = { numOfCakes: 10 };
const initialIcecreamsState = { numOfIcecreams: 20 };

export const cakeReducer = (state = initialCakesState, action: any) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 };
    default:
      return state;
  }
};

export const icecreamReducer = (state = initialIcecreamsState, action: any) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIcecreams: state.numOfIcecreams - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: icecreamReducer,
});

export const store = createStore(rootReducer, applyMiddleware(logger));
