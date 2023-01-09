import styles from "./cards.module.css"
import Card from "../Card/Card";

export default function Cards(props){
    const {dogs} = props
    return(
            <div className={styles.cards}>
                {
                    !dogs[0]? <h3 className={styles.notFoundMessage}>We're sorry, apparently the breed of dog you're trying to find doesn't exist.</h3> : null
                }
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