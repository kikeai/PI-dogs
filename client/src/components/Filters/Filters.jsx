import styles from './filters.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions'
import { useLocalStorage } from '../../hooks/useLocalStorage';

export default function Filters(){
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temperaments);
    const [selects, setSelects] = useLocalStorage("selects", {
        temp: "",
        ob: "",
        ow: "",
    })

    function handleClick(e){
        e.preventDefault()

        dispatch(actions.restartFilters())
        setSelects({
            temp: "",
            ob: "",
            ow: "",
        })
    }

    function handleChange(e){
        const {name, value} = e.target;
        switch (name) {
            case "temperament":
                setSelects({
                    ...selects,
                    temp: value
                })
                return dispatch(actions.filterTemperaments(value))
            case "orderbreed":
                setSelects({
                    ...selects,
                    ob: value
                })
                return dispatch(actions.orderName(value))
            case "orderweigth":
                setSelects({
                    ...selects,
                    ow: value
                })
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
                <select className={styles.filterSelects} value={selects.temp} name="temperament" onChange={handleChange}>
                    <option value="" hidden>Select Temperament</option>
                    <option value="All">All</option>
                    {
                        temps.map(t => <option value={t.name} key={`${t.id}${t.name}`}>{t.name}</option>)
                    }
                </select>
            </div>

            <div>
                <h3 className={styles.filterTitles}>Ordered</h3>
                <p className={styles.nameSelects}>Name</p>
                <select className={styles.filterSelects} value={selects.ob} name="orderbreed" onChange={handleChange}>
                    <option value="" hidden>Select Order</option>
                    <option value="A-Z">A-Z</option>
                    <option value="Z-A">Z-A</option>
                </select>

                <p className={styles.nameSelects}>Weigth</p>
                <select className={styles.filterSelects} value={selects.ow} name="orderweigth" onChange={handleChange}>
                    <option value="" hidden>Select Order</option>
                    <option value="Ascendent">Ascendent</option>
                    <option value="Descendent">Descendent</option>
                </select>
                <div className={styles.buttonContainer}>
                    <button disabled={selects.ob === "" && selects.ow === "" && selects.temp === ""} className={styles.buttonReset} onClick={handleClick}>Reset filters</button>
                </div>
            </div>
        </div>
    )
}