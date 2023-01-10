import { GET_BREEDS, GET_TEMPERAMENTS, GET_DETAIL, SEARCH_BREED, FILTER_BREEDS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESTART_FILTERS, REQUEST } from "./action-types";

const initialState = {
    myBreeds: [],
    allBreeds: [],
    temperaments: [],
    detail: [],
    request: true,
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
        case GET_DETAIL:
            return{
                ...state,
                detail: [...payload]
            }
        case SEARCH_BREED:
            let res = [];
            if(typeof payload !== "string") res = [...payload];
            return{
                ...state,
                myBreeds: [...res]
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
            let breedsCopy;
            if(payload === "All"){
                breedsCopy = [...state.allBreeds]
            } else{
                breedsCopy = [...state.myBreeds];
                breedsCopy = breedsCopy.filter(b => b.temperaments.includes(payload))
            }
            return{
                ...state,
                myBreeds: [...breedsCopy],
            }
        case ORDER_NAME:
            const orderCopy = [...state.myBreeds];
            
            let orderedName = payload === "A-Z" ? orderCopy.sort((a, b) => {
                if(a.name > b.name){
                    return 1;
                }
                if(a.name < b.name){
                    return -1;
                }
                return 0;
            }) : orderCopy.sort((a, b) => {
                if(a.name < b.name){
                    return 1;
                }
                if(a.name > b.name){
                    return -1;
                }
                return 0;
            })
            
            return{
                ...state,
                myBreeds: [...orderedName]
            }
        case ORDER_WEIGHT:
            const orderWeightCopy = [...state.myBreeds]
            
            let orderWeight = payload === "Ascendent" ? orderWeightCopy.sort((a, b) => {
                let weightA = (parseInt(a.weight[0]) + parseInt(a.weight[1])) / 2;
                let weightB = (parseInt(b.weight[0]) + parseInt(b.weight[1])) / 2;
                if(!a.weight[1]){
                    weightA = parseInt(a.weight[0]);
                }
                if(!b.weight[1]){
                    weightB = parseInt(b.weight[0]);
                }
                if(a.weight[0] === "NaN" && a.weight[1]){
                    weightA = parseInt(a.weight[1])
                }
                if(b.weight[0] === "NaN" && b.weight[1]){
                    weightB = parseInt(b.weight[1])
                }
                if(a.weight[0] === "NaN" && !a.weight[1]){
                    weightA = 0
                }
                if(b.weight[0] === "NaN" && !b.weight[1]){
                    weightB = 0
                }
                
                return weightA - weightB;
            }) : orderWeightCopy.sort((a, b) => {
                let weightA = (parseInt(a.weight[0]) + parseInt(a.weight[1])) / 2;
                let weightB = (parseInt(b.weight[0]) + parseInt(b.weight[1])) / 2;
                if(!a.weight[1]){
                    weightA = parseInt(a.weight[0]);
                }
                if(!b.weight[1]){
                    weightB = parseInt(b.weight[0]);
                }
                if(a.weight[0] === "NaN" && a.weight[1]){
                    weightA = parseInt(a.weight[1])
                }
                if(b.weight[0] === "NaN" && b.weight[1]){
                    weightB = parseInt(b.weight[1])
                }
                if(a.weight[0] === "NaN" && !a.weight[1]){
                    weightA = 0
                }
                if(b.weight[0] === "NaN" && !b.weight[1]){
                    weightB = 0
                }
                
                return weightB - weightA;
            })
            
            return{
                ...state,
                myBreeds: [...orderWeight],
            }
        case RESTART_FILTERS:
            return{
                ...state,
                myBreeds: [...state.allBreeds],
            }
        case REQUEST:
            return{
                ...state,
                request: payload,
            }
        default:
            return {...state};
    }
}