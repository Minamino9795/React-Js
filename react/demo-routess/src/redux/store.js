import { DEPOSIT } from "./action"
import rootReducer from "./reducer";
import { createStore } from "redux";
import { applyMiddleware } from "redux";
const myMiddleware =(store)=>(next)=>(action)=>{
    if (action.type == DEPOSIT){
        action.payLoad= action.payLoad +5;
    }
    next(action);
};
// const store=createStore(rootReducer, applyMiddleware(myMiddlewarre));
const store = createStore(rootReducer, applyMiddleware(myMiddleware))
export default store;