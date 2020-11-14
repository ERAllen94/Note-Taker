const router = require('express').Router();
const { newNote, deleteNotes } =require('./addedNotes')
const { notes } = require('./db/db.json')
const fs = require("fs");

router.get('/notes', (req, res) => {

    fs.readFile('db/db.json', (err,data) =>{
console.log('what is data', JSON.parse(data))
        res.json(JSON.parse(data).notes)
    })
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const postedNote = newNote(req.body, notes)
   

    let results = notes;
    res.json(notes);
})

router.delete('/notes/:id', (req, res) => {
   deleteNotes(req.params.id, notes);
    let results = notes;
    console.log('results delete', results)
    res.json(results);
    
})

module.exports = router;
