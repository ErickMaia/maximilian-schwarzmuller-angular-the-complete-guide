import { Action, createAction, props } from "@ngrx/store";

export const INCREMENT: string = '[Counter] Increment'
export const DECREMENT: string = '[Counter] Decrement'
export const INIT: string = '[Counter] Init'
export const SET: string = '[Counter] Set'

export const init = createAction(
    INIT
); 

export const set = createAction(
    SET, 
    props<{value: number}>()
)

export const increment = createAction(
    INCREMENT, 
    props<{value: number}>()
); 

export const decrement = createAction(
    DECREMENT, 
    props<{value:number}>()
)



// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action{
//     readonly type = INCREMENT;

//     // constructor(payload: {value: string}){}

//     constructor(public value: number){}
// }