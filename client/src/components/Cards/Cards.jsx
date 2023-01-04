import styles from "./cards.module.css"
import Card from "../Card/Card";

export default function Cards(props){
    const {dogs} = props
    return(
            <div className={styles.cards}>
                {
                    dogs.map((b) => <Card
                        key={b.id}
                        id={b.id}
                        name={b.name}
                        weight={b.weight}
                        temperaments={b.temperaments}
                        image= {b.image}/>)
                }
            </div>
    )
}