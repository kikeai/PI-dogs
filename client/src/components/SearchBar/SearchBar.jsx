import styles from './searchbar.module.css'
import lupa from '../../media/lupa.png'


export default function SearchBar(){

    return(
        <div className={styles.container}>
        <select className={styles.select}>
            <option value="All">All</option>
            <option value="Existent">Existent</option>
            <option value="Created">Created</option>
        </select>
        <form className={styles.search}>
            <input className={styles.input} type="text" placeholder="Search breed" />
            <button className={styles.buttonSearch} type="submit">
                <img className={styles.lens} src={lupa} alt="lens" />
            </button>
        </form>
        </div>
    )
}