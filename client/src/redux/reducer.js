import { GET_BREEDS, GET_TEMPERAMENTS, FILTER_BREEDS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT } from "./action-types";

const initialState = {
    myBreeds: [],
    allBreeds: [],
    temperaments: [],
};

export default function breeds(state=initialState, action){
    const { type, payload } = action
    switch (type) {
        case GET_BREEDS:
            return{
                ...state,
                myBreeds: [...payload],
                allBreeds: [...payload],
            }
        case GET_TEMPERAMENTS:
            return{
                ...state,
            }
        case FILTER_BREEDS:
            return{
                ...state,
            }
        case FILTER_TEMPERAMENTS:
            return{
                ...state,
            }
        case ORDER_NAME:
            return{
                ...state,
            }
        case ORDER_WEIGHT:
            return{
                ...state,
            }
        default:
            return {...state};
    }
}