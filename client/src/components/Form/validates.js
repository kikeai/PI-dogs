const nameRegex = /^[a-zA-Z\s]*$/;
const tempRegex = /^[a-zA-Z]*$/;

export default function validates(inputs){
    let errors = {};

    // -- NAME --
    if(inputs.name.length < 4){
        errors.name = "*Min 4 letters"
    }
    if(!nameRegex.test(inputs.name)){
        errors.name = "*No numbers or special characters";
    }
    if(inputs.name.charAt(0).toLowerCase() === inputs.name.charAt(0)){
        errors.name = "*The first letter must be uppercase"
    }
    if(inputs.name === ""){
        errors.name = "*It cant be empty"
    }
    if(inputs.name.charAt(inputs.name.length - 1) === " "){
        errors.name = "*The last character cannot be a space"
    }
    if(inputs.name.charAt(0) === " "){
        errors.name = "*The first character cannot be a space"
    }
    if(inputs.name.includes("  ")){
        errors.name = "*No two spaces can be together"
    }
    if(inputs.name.length > 100){
        errors.name = "*Max 100 letters"
    }

    // -- HEIGHT --
    if(inputs.min_height === ""){
        errors.min_height = "*It cant be empty"
    }
    if(parseInt(inputs.min_height) <= 0){
        errors.min_height = "*Cannot be equal to or less than 0";
    }
    if(parseInt(inputs.max_height) <= 0){
        errors.max_height = "*Cannot be equal to or less than 0";
    } else if(parseInt(inputs.min_height) >= parseInt(inputs.max_height)){
        errors.min_height = "*Min not greater or equal than max";
        errors.max_height = "*Max not less or equal than min";
    }
    
    // -- WEIGHT --
    if(inputs.min_weight === ""){
        errors.min_weight = "*It cant be empty"
    }
    if(parseInt(inputs.min_weight) <= 0){
        errors.min_weight = "*Cannot be equal to or less than 0";
    }
    if(parseInt(inputs.max_weight) <= 0){
        errors.max_weight = "*Cannot be equal to or less than 0";
    } else if(parseInt(inputs.min_weight) >= parseInt(inputs.max_weight)){
        errors.min_weight = "*Min not greater or equal than max";
        errors.max_weight = "*Max not less or equal than min";
    }

    // -- LIFE SPAN --
    if(inputs.min_life_span === ""){
        errors.min_life_span = "*It cant be empty"
    }
    if(parseInt(inputs.min_life_span) <= 0){
        errors.min_life_span = "*Cannot be equal to or less than 0";
    }
    if(parseInt(inputs.max_life_span) <= 0){
        errors.max_life_span = "*Cannot be equal to or less than 0";
    } else if(parseInt(inputs.min_life_span) >= parseInt(inputs.max_life_span)){
        errors.min_life_span = "*Min not greater or equal than max";
        errors.max_life_span = "*Max not less or equal than min";
    }

    return errors;
}

export function tempValidate(str){
    let error = "";
    if(!tempRegex.test(str)){
        error = "*No letters or special characters"
    }
    if(str.includes(" ")){
        error = "*Only a word"
    }
    if(str.charAt(str.length - 1) === " "){
        error = "*The last character cannot be a space"
    }
    if(str.charAt(0) === " "){
        error = "*The first character cannot be a space"
    } 
    if(str === ""){
        error = "";
    }
    return error;
}