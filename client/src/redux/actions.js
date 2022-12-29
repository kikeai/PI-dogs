import { GET_BREEDS, GET_TEMPERAMENTS, FILTER_BREEDS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESTART_FILTERS } from "./action-types";
import axios from 'axios'

export async function getBreeds(){
    const res = await axios.get('http://localhost:3001/dogs')
    return {
        type: GET_BREEDS,
        payload: res.data,
    }
}

export async function getTemperaments(){
    const res = await axios.get('http://localhost:3001/temperaments')
    return {
        type: GET_TEMPERAMENTS,
        payload: res.data.map(t => t.name),
    }
}

export function filterBreeds(status){
    return {
        type: FILTER_BREEDS,
        payload: status,
    }
}

export function filterTemperaments(status){
    return {
        type: FILTER_TEMPERAMENTS,
        payload: status,
    }
}

export function orderName(status){
    return{
        type: ORDER_NAME,
        payload: status,
    }
}

export function orderWeight(status){
    return{
        type: ORDER_WEIGHT,
        payload: status,
    }
}

export function restartFilters(){
    return{
        type: RESTART_FILTERS,
        payload: "Restart"
    }
}