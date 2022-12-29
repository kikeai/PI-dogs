import { GET_BREEDS, GET_TEMPERAMENTS, FILTER_BREEDS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESTART_FILTERS } from "./action-types";

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
                temperaments: [...payload]
            }
        case FILTER_BREEDS:
            const filterCopy = [...state.allBreeds]
            const filterApi = filterCopy.filter(b => !isNaN(b.id));
            const filterDb = filterCopy.filter(b => isNaN(b.id));
            let filteredBreeds;
            if(payload === "All") filteredBreeds = filterCopy;
            if(payload === "Existent") filteredBreeds = filterApi;
            if(payload === "Created") filteredBreeds = filterDb;
            return{
                ...state,
                myBreeds: [...filteredBreeds],
            }
        case FILTER_TEMPERAMENTS:
            const breedsCopy = [...state.myBreeds];
            const breedFilter = breedsCopy.filter(b => b.temperaments.includes(payload))
            return{
                ...state,
                myBreeds: [...breedFilter],
            }
        case ORDER_NAME:
            const orderCopy = [...state.myBreeds];
            const ascendent = orderCopy.sort((a, b) => {
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            })
            const descendent = orderCopy.sort((a, b) => {
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            })
            let orderedName;
            if(payload === "A-Z") orderedName = ascendent;
            if(payload === "Z-A") orderedName = descendent;
            return{
                ...state,
                myBreeds: [...orderedName]
            }
        case ORDER_WEIGHT:
            const orderWeightCopy = [...state.myBreeds]
            const weightAscendent = orderWeightCopy.sort((a, b) => {
                let weightA = (parseInt(a.weight[0]) + parseInt(a.weight[1])) / 2;
                let weightB = (parseInt(b.weight[0]) + parseInt(b.weight[1])) / 2;
                return weightA - weightB;
            })
            const weightDescendent = orderWeightCopy.sort((a, b) => {
                let weightA = (parseInt(a.weight[0]) + parseInt(a.weight[1])) / 2;
                let weightB = (parseInt(b.weight[0]) + parseInt(b.weight[1])) / 2;
                return weightB - weightA;
            })
            let orderWeight;
            if(payload === "Ascendent") orderWeight = weightAscendent;
            if(payload === "Descendent") orderWeight = weightDescendent;
            return{
                ...state,
                myBreeds: [...orderWeight],
            }
        case RESTART_FILTERS:
            return{
                ...state,
                myBreeds: [...state.allBreeds],
            }
        default:
            return {...state};
    }
}