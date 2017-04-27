import {INCREMENT_COUNT} from '../constants/actionTypes'

function incrementCount(/*Optional data payload*/){
    return {
        type : INCREMENT_COUNT
    }
}

export {incrementCount}