import spin from '../../media/loading.png';
import styles from './loading.module.css'

export default function Loading(){
    return (
        <div className={styles.container}>
            <div>
                <img className={styles.spinIcon} src={spin} alt="O" />
            </div>
        </div>
    )
}