import styles from './searchbar.module.css'
import { useState } from 'react';
import lupa from '../../media/lupa.png'
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

export default function SearchBar(){
    const [breed, setBreed] = useState("");

    const dispatch = useDispatch();
    function handleChange(e){
        const {value} = e.target;
        dispatch(actions.filterBreeds(value))
    }

    function handleWrite(e){
        const {value} = e.target;
        setBreed(value)
    }
    
    async function handleSubmit(e){
        e.preventDefault();
        dispatch(actions.searchBreed(breed))
        setBreed("")
    }

    return(
        <div className={styles.container}>
        <select className={styles.select} name="filterbreed" onChange={handleChange}>
            <option value="All">All</option>
            <option value="Existent">Existent</option>
            <option value="Created">Created</option>
        </select>
        <form className={styles.search} onSubmit={handleSubmit}>
            <input className={styles.input} type="search" onChange={handleWrite} value={breed} placeholder="Search breed" />
            <button className={styles.buttonSearch} type="submit">
                <img className={styles.lens} src={lupa} alt="lens" />
            </button>
        </form>
        </div>
    )
}