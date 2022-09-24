require('dotenv').config();
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.get('/', async (req,res)=> res.send('Hola Mundo'));

app.listen(port,() => console.log('Mi puerto',port));