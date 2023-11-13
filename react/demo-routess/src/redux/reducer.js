import { DEPOSIT, DRAW } from "./action";

const initialState={
    amount:0
}
const rootReducer=(state= initialState,action)=>{
    switch(action.type){
        case DEPOSIT:
            return { ...state, amount: state.amount + action.payLoad};
        case DRAW:
            return { ...state, amount: state.amount - action.payLoad};
            default:
                return state;
    }
}

export default rootReducer;