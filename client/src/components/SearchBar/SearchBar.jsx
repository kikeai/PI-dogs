import styles from './searchbar.module.css'
import { useState } from 'react';
import lupa from '../../media/lupa.png'
import { useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';

const searchRegex = /[a-zA-Z]+$/

export default function SearchBar(){
    const [error, setError] = useState("")
    const [breed, setBreed] = useState("");

    const dispatch = useDispatch();
    function handleChange(e){
        const {value} = e.target;
        dispatch(actions.filterBreeds(value))
    }

    function validate(e){
        if(!searchRegex.test(e.target.value)){
            setBreed(e.target.value)
            setError("Not numbers, not special characters")
        } else{
            setError("")
            setBreed(e.target.value)   
        }
    }
    
    function handleSubmit(e){
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
            <input className={styles.input} type="search" value={breed} onChange={validate} placeholder="Search breed" />
            <button disabled={!!error} className={styles.buttonSearch} type="submit">
                <img className={styles.lens} src={lupa} alt="lens" />
            </button>
        </form>
        </div>
    )
}