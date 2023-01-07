import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as actions from "../../redux/actions.js"

export default function Detail(){
    const dispatch = useDispatch();
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        dispatch(actions.getDetail(id))
    }, [dispatch, id])

    const dogBreed = useSelector(state => state.detail);

    let dogImage;
    let dogName;
    let dogLifeSpan;
    let dogHeight;
    let dogWeight;
    let dogTemperament;

    if(dogBreed[0]){
        dogImage = dogBreed[0].image;
        dogName = dogBreed[0].name;
        dogLifeSpan = dogBreed[0].life_span;

        //height
        let height1 = dogBreed[0].height[0];
        let height2 = dogBreed[0].height[1];
        if(!height2){
            dogHeight = height1
        } else {
            dogHeight = `(${height1} - ${height2})`
        }

        //weight
        let weight1 = dogBreed[0].weight[0]
        let weight2 = dogBreed[0].weight[1]
        if(weight1 === "NaN" && weight2 !== "NaN" && !!weight2){
            dogWeight = `( ${weight2} )`
        }
        if(!weight2){
            if(weight1 === "NaN") weight1 = "Unknown";
            dogWeight = `( ${weight1} )`;
        }else {
            if(weight1 === "NaN") weight1 = "Unknown";
            if(weight2 === "NaN") weight2 = "Unknown";
            dogWeight = `( ${weight1} - ${weight2} )`;
        }
        
        //temperament
        let temp1 = dogBreed[0].temperaments[0];
        let temp2 = dogBreed[0].temperaments[1];
        if(!temp2){
            dogTemperament = `(${temp1})`
        }
        if(!temp1){
            dogTemperament = "Unknown"
        }else {
            dogTemperament = `(${dogBreed[0].temperaments.join(", ")})`
        }

    }

    return (
        <div>
            <h2>Detalles</h2>
            <img src={dogImage} alt={dogName} />
            <h3>{dogName}</h3>
            <p>{dogHeight}</p>
            <p>{dogWeight}</p>
            <p>{dogTemperament}</p>
            <p>{dogLifeSpan}</p>
        </div>
    )
}