import {INCREMENT_COUNT} from '../constants/actionTypes';

let initialState = 0;

export default function reducer(state=initialState, action){
    console.log('reducer start.')
    switch(action.type){
        case 'INCREMENT_COUNT':
            return state+1;
        default:
            return state;
    }
    console.log('reducer end.')
}