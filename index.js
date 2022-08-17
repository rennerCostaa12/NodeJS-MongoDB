require('dotenv').config();
const express = require('express');
const app = express();
const port = 4000;
const mongoose = require('mongoose');

const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD);


app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

// Rota da API
const personRoutes = require('./routes/personRoutes');
app.use('/person', personRoutes);

// Conexão com o banco 
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@node-curso.mvvpr.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado!");
        app.listen(port)
    })
    .catch((error) => {
        console.log(error);
    })
