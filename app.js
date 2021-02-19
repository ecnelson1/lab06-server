const express = require('express');

const cors = require('cors');

const app = express();

const { hellCast } = require('./data.js');

app.use(cors());

app.get('/cast', (req,res) => {
    res.json({hellCast});
});
app.get('/cast/:id', (req,res) => {
    const id = Number(req.params.id);
    const chosenCast = hellCast.find((character) => character.id === id);
    res.json(chosenCast)
});
module.exports = { app }