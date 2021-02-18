const express = require('express');
const cors = require('cors');
const app = express();
const { hellCast } = require('./data.js');
app.use(cors());

app.get('/cast', (req,res) => {
    res.json({hellCast});
});
app.get('/cast:id', (req,res) => {
    const name = Number(req.params.id);
    const chosenCast = hellCast.find(castMember => castMember.id===id);
    res.json({chosenCast})
});
module.exports = { app }