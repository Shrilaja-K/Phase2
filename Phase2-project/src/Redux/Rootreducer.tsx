import cakeReducer from "./Cake/cakeReducer";
import IcecreamReducer from "./Icecream/IcecreamReducer";
import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";

const Rootreducer = combineReducers({
    cake:cakeReducer,
    icecream:IcecreamReducer,
    user:UserReducer
})

export default Rootreducer