import styles from './card.module.css'
import weightIcon from '../../media/peso.png'
import { Link } from 'react-router-dom';

export default function Card(props){
    const {name, weight, temperaments, image, id} = props
    const weightToString = () => {
        let weight1 = weight[0]
        let weight2 = weight[1]
        let weightStr;
        if(weight1 === "NaN" && weight2 !== "NaN" && !!weight2){
            weightStr = `( ${weight2} )`
            return weightStr;
        }
        if(!weight2){
            if(weight1 === "NaN") weight1 = "Unknown";
            weightStr = `( ${weight1} )`;
            return weightStr;
        }else {
            if(weight1 === "NaN") weight1 = "Unknown";
            if(weight2 === "NaN") weight2 = "Unknown";
            weightStr = `( ${weight1} - ${weight2} )`;
            return weightStr;
        }
    }
    const temperamentsToString = () => {
        let temp1 = temperaments[0];
        let temp2 = temperaments[1];
        let tempStr;
        if(!temp1){
            tempStr = "Unknown"
            return tempStr
        }
        if(!temp2){
            tempStr = `(${temp1})`
            return tempStr;
        }else {
            tempStr = `(${temp1}, ${temp2})`
            return tempStr;
        }
    }
    return (
        <Link className={styles.cardContainer} to={`/detail/${id}`}>
            <img className={styles.dog} src={image} alt="perro" />
            <div className={styles.nameContainer}>
                <h4 className={styles.name}>{name}</h4>
            </div>
            <div className={styles.weightContainer}>
                <img className={styles.weight} src={weightIcon} alt="icono" />
                <p className={styles.weightText}>{weightToString()}</p>
            </div>
            <div className={styles.temperamentsContainer}>
                <p className={styles.temperaments}>{temperamentsToString()}</p>
            </div>
        </Link>
    )
}