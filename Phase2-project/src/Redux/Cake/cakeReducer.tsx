import { BUY_CAKE } from "./cakeTypes";

const initialState = { 
    numOfCakes: 10 
}

const cakeReducer = (state = initialState, action: any) => {
    if (action.type === BUY_CAKE) {
        console.log("payload:", action.payload, "type:", typeof action.payload);
    }
    switch(action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.payload
            }
        default:
            return state;
    }
}

export default cakeReducer;