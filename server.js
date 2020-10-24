const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require('./htmlRoutes')
const apiRoute = require('./apiRoutes');
const router = require('./apiRoutes');
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use("/api", apiRoute)
app.use("/", routes)

app.listen(PORT, () => {
    console.log(`App listening on on port ${PORT}!`);

});



