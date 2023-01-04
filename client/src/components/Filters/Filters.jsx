import styles from './filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'

export default function Filters(){
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temperaments)

    function handleChange(e){
        const {name, value} = e.target;
        switch (name) {
            case "temperament":
                return dispatch(actions.filterTemperaments(value))
            case "orderbreed":
                return dispatch(actions.orderName(value))
            case "orderweigth":
                return dispatch(actions.orderWeight(value))
            default:
                return;
        }
    }

    return(
        <div className={styles.filtersContainer}>
            <div>
                <h3 className={styles.filterTitles}>Filters</h3>
                <p className={styles.nameSelects}>Temperament</p>
                <select className={styles.filterSelects} name="temperament" onChange={handleChange}>
                    <option disabled selected defaultValue>Select Temperament</option>
                    <option value="All">All</option>
                    {
                        temps.map(t => <option value={t.name} key={`${t.id}${t.name}`}>{t.name}</option>)
                    }
                </select>
            </div>

            <div>
                <h3 className={styles.filterTitles}>Orders</h3>
                <p className={styles.nameSelects}>Name</p>
                <select className={styles.filterSelects} name="orderbreed" onChange={handleChange}>
                    <option disabled selected defaultValue>Select Order</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                <p className={styles.nameSelects}>Weigth</p>
                <select className={styles.filterSelects} name="orderweigth" onChange={handleChange}>
                    <option disabled selected defaultValue>Select Order</option>
                    <option value="Ascendent">Ascendent</option>
                    <option value="Descendent">Descendent</option>
                </select>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonReset}>Reset filters</button>
                </div>
            </div>
        </div>
    )
}