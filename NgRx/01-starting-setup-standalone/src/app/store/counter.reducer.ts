import { Action, createReducer, on } from "@ngrx/store";
// import { INCREMENT, IncrementAction } from "./counter.actions";
import {decrement, increment, set } from "./counter.actions";

const initialState = 0

export const counterReducer = createReducer(
    initialState, 
    on(increment, (state, action) => state + action.value), 
    on(decrement, (state, action) => state - action.value), 
    on(set, (state, action) => action.value)
);

// export function counterReducer(state = initialState, action: any){
    
//     switch(action.type){
//         case INCREMENT:
//             return state + action.value
//         case DECREMENT:
//             return state - action.value 
//     }
    
//     return state;
// }

// // export type CounterActions = IncrementAction | DecrementAction; 
// export type CounterActions = IncrementAction; 