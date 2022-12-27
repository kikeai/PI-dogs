const { MY_API_KEY } = process.env;
const { Dog, Temperament } = require('../db.js');
const axios = require('axios');

const apiUrl = `https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`

//-----FUNCTIONS-----//

// -- GET DATA FROM API -- //
const getApiData = async() => {

    const apiData = await axios.get(apiUrl);
    const apiInfo = await apiData.data.map(el => {
    let temperamentArray = [];
    if (el.temperament) {
        temperamentArray = el.temperament.split(", ");
    }
    
    let heightArray = [];
    if (el.height.metric) {
        heightArray = el.height.metric.split(" - ");
    }

    let weightArray = [];
    if (el.weight.metric) {
        weightArray = el.weight.metric.split(" - ");
    }
        return {
            id: el.id,
            name: el.name,
            height: heightArray,
            weight: weightArray,
            temperaments: temperamentArray,
            life_span: el.life_span,
            image: el.image.url,
        }
    })
return apiInfo;
}

// -- GET DATA FROM DATABASE -- //
const getFromDb = async () => {
    let dogsDb = await Dog.findAll({
        include: {
            model: Temperament,
            attributes: ['name'], //atributos que quiero traer del modelo Temperament, el id lo trae automatico
            through: {
                attributes: [],//traer mediante los atributos del modelo
            },
        }
    })

    dogsDb = await dogsDb.map( d => {
        d = JSON.parse(JSON.stringify(d));
        d.temperaments = d.temperaments.map(t => t.name);
        return d;
    })
    
    return dogsDb
};

// -- MIXED API DATA AND DB DATA -- //
const getAllDogs = async () => {
    const dataFromApi = await getApiData();
    const dataFromDb = await getFromDb();
    const allDataMixed = [...dataFromApi, ...dataFromDb];
    return allDataMixed;
}

module.exports = getAllDogs;