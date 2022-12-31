const { Router } = require('express');
const getAllDogs = require('../request.js');
const { Dog, Temperament } = require('../../db.js');

const router = Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    const allDogs = await getAllDogs();
    if(name){
        const dogFilter = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        dogFilter.length ? res.status(200).send(dogFilter) : res.status(404).send("Dog not found");
    } else {
        res.status(200).send(allDogs)
    }
})

router.get('/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    const dogFilter = allDogs.filter(el => el.id == idRaza);
    if (dogFilter.length) {
        res.status(200).json(dogFilter);
    }else{
        res.status(404).send("Dog no found in the Data");
    }
})

router.post('/', async (req, res) => {
    let {
        name,
        min_height,
        max_height,
        min_weight,
        max_weight,
        min_life_span,
        max_life_span,
        temperaments,
        image
       } = req.body;
       
       
       const fixedHeight = [];
       fixedHeight.push(min_height, max_height)
       
       const fixedWeight = [];
       fixedWeight.push(min_weight, max_weight)
       
       let life_span;
       if(min_life_span === null) life_span = "unknown";
       else if(max_life_span === null){
        life_span = `${min_life_span} years`
       } else {
        life_span = `${min_life_span} - ${max_life_span} years`
       }

       try {
           let breed = await Dog.create({
            name,
            height: fixedHeight,
            weight: fixedWeight,
            life_span,
            image: image ? image : "https://www.publicdomainpictures.net/pictures/260000/velka/dog-face-cartoon-illustration.jpg",
            })

            temperaments.forEach(el => {
                let i = el.trim()
                Temperament.findOrCreate({
                 where: { name: i }
            })
            });
        
           let associatedTemp = await Temperament.findAll({
               where: { name: temperaments},
           })
        
           breed.addTemperament(associatedTemp);
        
           res.status(200).send("Dog created succesfully!")
           
       } catch (error) {
            res.status(404).json({ error })        
       }
})


module.exports = router;