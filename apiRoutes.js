const router = require('express').Router();
const { newNote, deleteNotes } =require('./addedNotes')
const { notes } = require('./db/db.json')

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const postedNote = newNote(req.body, notes)
    console.log('what is new note', postedNote)

    let results = notes;

    console.log('results', results)

    res.json(notes);
})

router.delete('/notes/:id', (req, res) => {
    deleteNotes(req.params.id, notes);
    res.json(notes);
})

module.exports = router;
