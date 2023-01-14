import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./form.module.css";
import validates, { imageValidate } from "./validates";
import { tempValidate } from "./validates";
import { Link } from 'react-router-dom';
import { postBreed, getTemperaments, requestYoN } from "../../redux/actions";


export default function Form(){
    const dispatch = useDispatch();
    const temps = useSelector(state => state.temperaments);
    const [dog, setDog] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_life_span: "",
        max_life_span: "",
        temperaments: [],
        image: "",
    })
    
    const [newTemp, setNewTemp] = useState("");
    const [tempErr, setTempErr] = useState("");
    const [imageErr, setImageErr] = useState("");
    const [resPost, setResPost] = useState("");

    const [errors, setErrors] = useState({
        name: "",
        min_height: "",
        max_height: "",
        min_weight: "",
        max_weight: "",
        min_life_span: "",
        max_life_span: "",
    })

    const breeds = useSelector(state => state.allBreeds);
    let nameBreeds = [];
    if(breeds[0]){
        nameBreeds = breeds.map(b => b.name.toLowerCase())
    }

    async function handleSubmit(e){
        e.preventDefault()
        const res = await dispatch(postBreed(dog));
        setResPost(res)
        setDog({
            name: "",
            min_height: "",
            max_height: "",
            min_weight: "",
            max_weight: "",
            min_life_span: "",
            max_life_span: "",
            temperaments: [],
            image: "",
        })
        dispatch(requestYoN(true))
    }

    function submitDisabled(){
        let err = false;
        for (const key in errors) {
            if(errors[key] !== "") err = true;
        }
        if(!dog.name) err = true;
        if(imageErr) err = true;
        
        return err;
    }

    function handleImageChange(e){
        const { value } = e.target;
        setDog({
            ...dog,
            image: value
        })
        setImageErr(imageValidate(value))
    }

    function handleTempChange(e){
        setNewTemp(e.target.value)
        setTempErr(tempValidate(e.target.value))
    }

    function addOrRemoveTemp(e){
        e.preventDefault()
        const {name} = e.target;
        switch (name) {
            case "add":
                let val = newTemp.toLowerCase();
                let firstLetter = val.charAt(0).toUpperCase();
                let rest = val.slice(1);
                let tempStr = `${firstLetter}${rest}`;

                if(dog.temperaments.includes(tempStr)) {
                    setNewTemp("")
                    break;
                } else {
                    setDog({
                        ...dog,
                        temperaments: [...dog.temperaments, tempStr]
                    })
                    setNewTemp("")
                    break;
                }
            case "remove":
                setDog({
                    ...dog,
                    temperaments: [...dog.temperaments.slice(0, dog.temperaments.length - 1)]
                })
                break;
            default:
                break;
        }
    }

    function handleChange(e){
        const {name, value} = e.target
        if(name === "temperaments"){
            if(dog.temperaments.includes(value)) return;
            else{
                setDog({
                    ...dog,
                    [name]: [...dog.temperaments, value]
                });
            }
        }
        else if(name === "name"){
            setDog({
                ...dog,
                [name]: value
            });
            setErrors(validates({
                ...dog,
                [name]: value,
            }));
            if(nameBreeds.includes(value.toLowerCase())){
                setErrors({
                    ...errors,
                    name: "*There is already a breed with that name"
                })
            }
        } else{
            setDog({
                ...dog,
                [name]: value
            });
            setErrors(validates({
                ...dog,
                [name]: value,
            }))
        }

    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])

    return (
        <div className={styles.body}>
            <Link className={styles.buttonHome} to='/home'>Back Home</Link>
            <div className={styles.formContainer}>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputContainer1}>
                        <div className={styles.inputSoon1}>
                            <p className={styles.nameInput}>*Name</p>
                            <input className={!errors.name? styles.inputOk : styles.inputBad} type="text" name="name" value={dog.name} onChange={handleChange} placeholder="Name"/>
                            { errors.name? <p className={styles.errorText}>{errors.name}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>*Min height</p>
                            <input className={!errors.min_height? styles.inputOk : styles.inputBad} type="number" name="min_height" value={dog.min_height} onChange={handleChange} placeholder="Min Height" />
                            { errors.min_height? <p className={styles.errorText}>{errors.min_height}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>Max height</p>
                            <input className={!errors.max_height? styles.inputOk : styles.inputBad} type="number" name="max_height" value={dog.max_height} onChange={handleChange} placeholder="Max Height" />
                            { errors.max_height? <p className={styles.errorText}>{errors.max_height}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>*Min weight</p>
                            <input className={!errors.min_weight? styles.inputOk : styles.inputBad} type="number" name="min_weight" value={dog.min_weight} onChange={handleChange} placeholder="Min Weight" />
                            { errors.min_weight? <p className={styles.errorText}>{errors.min_weight}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>Max weight</p>
                            <input className={!errors.max_weight? styles.inputOk : styles.inputBad} type="number" name="max_weight" value={dog.max_weight} onChange={handleChange} placeholder="Max Weight" />
                            { errors.max_weight? <p className={styles.errorText}>{errors.max_weight}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>*Min life span</p>
                            <input className={!errors.min_life_span? styles.inputOk : styles.inputBad} type="number" name="min_life_span" value={dog.min_life_span} onChange={handleChange} placeholder="Min Life Span" />
                            { errors.min_life_span? <p className={styles.errorText}>{errors.min_life_span}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                        <div className={styles.inputSoon}>
                            <p className={styles.nameInput}>Max life span</p>
                            <input className={!errors.max_life_span? styles.inputOk : styles.inputBad} type="number" name="max_life_span" value={dog.max_life_span} onChange={handleChange} placeholder="Max Life Span" />
                            { errors.max_life_span? <p className={styles.errorText}>{errors.max_life_span}</p>: <p className={styles.falseText}>p</p> }
                        </div>
                    </div>

                    <div className={styles.selectContainer}>
                        <p className={styles.nameTemp}>Temperaments</p>
                        <select className={styles.select} name="temperaments" onChange={handleChange}>
                            <option value="" hidden>Temperament</option>
                            {
                                temps.map(t => <option value={t.name} key={`${t.id}${t.name}`}>{t.name}</option>)
                            }
                        </select>
                        <input className={!tempErr? styles.inputOk : styles.inputBad} type="text" value={newTemp} onChange={handleTempChange} placeholder="Set a temperament" />
                        {tempErr? <p className={styles.errorText}>{tempErr}</p>: <p className={styles.falseText}>p</p>}
                        <div className={styles.buttonContainer}>
                            <button className={styles.button} disabled={!newTemp || tempErr} onClick={addOrRemoveTemp} name="add">Add temperament</button>
                            <button className={styles.button} disabled={!dog.temperaments.length} onClick={addOrRemoveTemp} name="remove">Come back</button>
                        </div>
                        <div className={styles.cont}>
                            <p className={styles.tempsText}>{`(${dog.temperaments.join(", ")})`}</p>
                        </div>
                    </div>

                    <div className={styles.inputContainer1}>
                        <div className={styles.inputSoon1}>
                            <p className={styles.nameInput}>Image</p>
                            <input className={!imageErr? styles.inputOk : styles.inputBad} type="text" name="image" value={dog.image} onChange={handleImageChange} placeholder="Url of your image" />
                            {imageErr? <p className={styles.errorText}>{imageErr}</p>: <p className={styles.falseText}>p</p>}
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <button className={styles.button} disabled={submitDisabled()} type="submit">Create</button>
                    </div>
                    <p className={styles.statusText}>{resPost}</p>
                </form>
            </div>
        </div>
    )
}