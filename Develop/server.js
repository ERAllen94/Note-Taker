const express = require('express');
const PORT = process.env.PORT || 3001;

const app = express();
const PORT = 3001;

const path = require('path');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.get("/api/notes")

console.log(path.join(__dirname))

 app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
  });

app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});


