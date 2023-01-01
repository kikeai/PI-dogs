import styles from './searchbar.module.css'
import lupa from '../../media/lupa.png'
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions'


export default function SearchBar(){
    const dispatch = useDispatch();
    function handleChange(e){
        const {value} = e.target;
        dispatch(actions.filterBreeds(value))
    }
    

    return(
        <div className={styles.container}>
        <select className={styles.select} name="filterbreed" onChange={handleChange}>
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