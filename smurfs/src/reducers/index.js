import { SMURFS_ERROR, SMURFS_SUCCESS, SMURFS_LOADING } from "../actions"

const initialState = {
    isLoading: false,
    smurfsData: [],
    error: '', 
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case SMURFS_LOADING:
            return {
                ...state,
                isLoading: true,
                error: '',
            }
        case SMURFS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                smurfsData: action.payload,
                error: '',
            }
        case SMURFS_ERROR: 
            return {
                ...state,
                isLoading: false,
                smurfsData: [],
                error: action.payload,
            }
        default:
            return state
    }
}