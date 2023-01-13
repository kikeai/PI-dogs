import { GET_BREEDS, GET_TEMPERAMENTS, GET_DETAIL, SEARCH_BREED, FILTER_BREEDS, FILTER_TEMPERAMENTS, ORDER_NAME, ORDER_WEIGHT, RESTART_FILTERS, REQUEST, DELETE_DETAIL } from "./action-types";
import axios from 'axios'

export function getBreeds(){
    return async function(dispatch) {
        const res = await axios.get('/dogs')
        return dispatch({
            type: GET_BREEDS,
            payload: res.data,
        });
    }
}

export function getTemperaments(){
    return async function(dispatch) {
        const res = await axios.get('/temperaments')
        return dispatch({
            type: GET_TEMPERAMENTS,
            payload: res.data,
        });
    }
}

export function getDetail(id){
    return async function(dispatch){
        const res = await axios.get(`/dogs/${id}`)
        return dispatch({
            type: GET_DETAIL,
            payload: res.data,
        })
    }
}

export function searchBreed(name){
    return async function(dispatch){
        try {
            const res = await axios.get(`/dogs/?name=${name}`)
            return dispatch({
                type: SEARCH_BREED,
                payload: res.data,
            })  
        } catch (error) {
            dispatch({
                type: SEARCH_BREED,
                payload: error.response.data,
            })
            return error.response.data
        }
        
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

export function postBreed(breed){
    return async function(){
        try {
            const res = await axios.post(`/dogs`, breed);
            return res.data; 
        } catch (error) {
            return error;
        }
    }
}

export function requestYoN(status){
    return{
        type: REQUEST,
        payload: status,
    }
}

export function deleteDetail(){
    return{
        type: DELETE_DETAIL,
        payload: "delete"
    }
}