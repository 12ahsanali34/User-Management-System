import { combineReducers } from "redux";
import User from '../components/SignIn/reducer';
const appReducer = combineReducers({
    User:User,
})
export default appReducer;