import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styles from "./detail.module.css"
import * as actions from "../../redux/actions.js"
import heart from "../../media/heart-icon.png";
import height from "../../media/height-icon.png";
import weight from "../../media/peso.png";

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
            dogHeight = `${height1} cm.`
        } else {
            dogHeight = `${height1} - ${height2} cm.`
        }

        //weight
        let weight1 = dogBreed[0].weight[0]
        let weight2 = dogBreed[0].weight[1]
        if(weight1 === "NaN" && weight2 !== "NaN" && !!weight2){
            dogWeight = `${weight2} Kg.`
        }
        if(!weight2){
            if(weight1 === "NaN") weight1 = "Unknown";
            dogWeight = `${weight1} Kg.`;
        }else {
            if(weight1 === "NaN") weight1 = "Unknown";
            if(weight2 === "NaN") weight2 = "Unknown";
            dogWeight = `${weight1} - ${weight2} Kg.`;
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
            dogTemperament = `(${dogBreed[0].temperaments.join(" - ")})`
        }

    }

    return (
        <div className={styles.detailContainer}>
            <div>
                <img className={styles.dogImage} src={dogImage} alt={dogName} />
            </div>

            <div className={styles.dataContainer}>
                <div className={styles.tempContainer}>
                    <h4 className={styles.titleText}>{dogName}</h4>
                </div>
                <div className={styles.infoContainer}>
                    <img className={styles.iconData} src={weight} alt="weigth" />
                    <p className={styles.dataText}>{dogWeight}</p>
                </div>
                <div className={styles.infoContainer}>
                    <img className={styles.iconData} src={height} alt="heigth" />
                    <p className={styles.dataText}>{dogHeight}</p>
                </div>
                <div className={styles.infoContainer}>
                    <img className={styles.iconData} src={heart} alt="heart" />
                    <p className={styles.dataText}>{dogLifeSpan}</p>
                </div>
                <div className={styles.tempContainer}>
                    <p className={styles.tempText}>{dogTemperament}</p>
                </div>
            </div>
        </div>
    )
}