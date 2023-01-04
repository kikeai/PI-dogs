
// {
//     name,
//     min_height,
//     max_height,
//     min_weight,
//     max_weight,
//     min_life_span,
//     max_life_span,
//     temperaments,
//     image
//    }
const nameRegex = /^[a-zA-Z]+$/;
const numRegex = /^[0-9]*$/;

export default function validates(inputs){
    let errors = {};

    // -- NAME --
    if(!nameRegex.test(inputs.name)){
        errors.name = "*No numbers or special characters";
    }
    if(inputs.name === ""){
        errors.name = "*It cant be empty"
    }

    // -- HEIGHT --
    if(inputs.min_height === ""){
        errors.min_height = "*It cant be empty"
    }
    if(!numRegex.test(inputs.min_height)){
        errors.min_height = "*No letters or special characters";
    }
    if(!numRegex.test(inputs.max_height)){
        errors.max_height = "*No letters or special characters";
    } else if(parseInt(inputs.min_height) >= parseInt(inputs.max_height)){
        errors.min_height = "*Min not greater than max";
        errors.max_height = "*Max not less or equal than min";
    }
    
    // -- WEIGHT --
    if(inputs.min_weight === ""){
        errors.min_weight = "*It cant be empty"
    }
    if(!numRegex.test(inputs.min_weight)){
        errors.min_weight = "*No letters or special characters";
    }
    if(!numRegex.test(inputs.max_weight)){
        errors.max_weight = "*No letters or special characters";
    } else if(parseInt(inputs.min_weight) >= parseInt(inputs.max_weight)){
        errors.min_weight = "*Min not greater than max";
        errors.max_weight = "*Max not less or equal than min";
    }

    // -- LIFE SPAN --
    if(inputs.min_life_span === ""){
        errors.min_life_span = "*It cant be empty"
    }
    if(!numRegex.test(inputs.min_life_span)){
        errors.min_life_span = "*No letters or special characters";
    }
    if(!numRegex.test(inputs.max_life_span)){
        errors.max_life_span = "*No letters or special characters";
    } else if(parseInt(inputs.min_life_span) >= parseInt(inputs.max_life_span)){
        errors.min_life_span = "*Min not greater than max";
        errors.max_life_span = "*Max not less or equal than min";
    }

    return errors;
}