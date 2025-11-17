import { legacy_createStore as createStore, applyMiddleware } from "redux";
import axios from "axios";

const initialState = { loading: false, users: [], error: "" };

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
const fetchUsersSuccess = (users: any[]) => ({ type: FETCH_USERS_SUCCESS, payload: users });
const fetchUsersFailure = (error: string) => ({ type: FETCH_USERS_FAILURE, payload: error });

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST: return { ...state, loading: true };
    case FETCH_USERS_SUCCESS: return { loading: false, users: action.payload, error: "" };
    case FETCH_USERS_FAILURE: return { loading: false, users: [], error: action.payload };
    default: return state;
  }
};

const thunkMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: any) =>
  typeof action === "function" ? action(dispatch, getState) : next(action);

const fetchUsers = () => (dispatch: any) => {
  dispatch(fetchUsersRequest());
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then(res => dispatch(fetchUsersSuccess(res.data.map((u: any) => u.id))))
    .catch(err => dispatch(fetchUsersFailure(err.message)));
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(() => console.log(store.getState()));

export { store, fetchUsers };
