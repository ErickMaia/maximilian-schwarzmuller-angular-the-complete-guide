import { Action, createAction, props } from "@ngrx/store";

export const INCREMENT: string = '[Counter] Increment'
export const DECREMENT: string = '[Counter] Decrement'

export const Increment = createAction(
    INCREMENT, 
    props<{value: number}>()
); 

export const Decrement = createAction(
    DECREMENT, 
    props<{value:number}>()
)



// export const INCREMENT = '[Counter] Increment';

// export class IncrementAction implements Action{
//     readonly type = INCREMENT;

//     // constructor(payload: {value: string}){}

//     constructor(public value: number){}
// }