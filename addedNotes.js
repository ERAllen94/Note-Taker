const fs = require("fs");
const path = require("path");

function newNote(newNote,NoteArr){
    NoteArr.push(newNote) 
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: NoteArr }, null, 2)
    );
}

function deleteNotes(id, noteArr) {
    console.log('hi',noteArr)
    const newArray = noteArr.filter(val => id.toString() !== val.id);
console.log('newarray',newArray)

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: newArray }, null, 2)
    );    
}

module.exports = {
    newNote, deleteNotes
}
