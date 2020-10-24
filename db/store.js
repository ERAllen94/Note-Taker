const fs = require('fs');
const path = require('path');
const util = require('util');
const readDB = util.promisify(fs.readFile);
const writeDB = util.promisify(fs.writeFile);

class Store {
    readFile(){
        return readDB(
            "./db.json",
            "UTF-8"
        )
    }


    getNotes(){
        this.readFile().then(notes => {
            var parseNotes
            try{
                parseNotes = [].concat(JSON.parse(notes))            
            }
            catch(err){
                parseNotes = []
            }
            return parseNotes;
            
        })
    }
}

module.exports = new Store();