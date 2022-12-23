const { Router } = require('express');
const { Temperament } = require('../../db.js');
const { MY_API_KEY } = process.env;
const axios = require('axios');

const router = Router();

router.get('/', async (req, res) => {
    try {
        const temperamentsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${MY_API_KEY}`);
        const temperaments = temperamentsApi.data.map(t => t.temperament);
        const temps = temperaments.toString().split(",");
        const tempsArr = new Set(temps)
        let result = [...tempsArr]
        result.filter(t => t !== "").forEach(el => {
            let i = el.trim()
            Temperament.findOrCreate({
                 where: { name: i }
            })
        })
    
        const allTemp = await Temperament.findAll();    
        res.send(allTemp);
    } catch (error) {
        res.status(400).json({error})
    }
})

module.exports = router;