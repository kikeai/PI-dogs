const { Router } = require('express');
const getAllDogs = require('../request.js');
const { Dog, Temperament } = require('../../db.js');

const router = Router();

router.get('/', async (req, res) => {
    const {name} = req.query;
    const allDogs = await getAllDogs();
    if(name){
        const dog = allDogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()));
        dog.length ? res.status(200).send(dog) : res.status(404).send("Dog not found");
    } else {
        res.status(200).send(allDogs)
    }
})

router.get('/:idRaza', async (req, res) => {
    const { idRaza } = req.params;
    const allDogs = await getAllDogs();
    const dog = allDogs.filter(el => el.id == idRaza);
    if (dog.length) {
        res.status(200).json(dog);
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
        life_span,
        temperaments,
        image
       } = req.body;
    
       const fixedHeight = [];
       fixedHeight.push(min_height, max_height)
    
       const fixedWeight = [];
       fixedWeight.push(min_weight, max_weight)

       try {
           let dog = await Dog.create({
            name,
            height: fixedHeight,
            weight: fixedWeight,
            life_span,
            image: image ? image : "https://www.publicdomainpictures.net/pictures/260000/velka/dog-face-cartoon-illustration.jpg",
           })
        
           let associatedTemp = await Temperament.findAll({
               where: { name: temperaments},
           })
        
           dog.addTemperament(associatedTemp);
        
           res.status(200).send("Dog created succesfully!")
           
       } catch (error) {
            res.status(404).json({ error })        
       }
})


module.exports = router;