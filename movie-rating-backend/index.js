const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const servicesController = require('./controller/services.controller')
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);
mongoose.connect('mongodb://localhost:27017',{
    dbName : 'test',
    useNewUrlParser : true
}).then(()=>{
    console.log("DB connected");
}).catch((error) => {
    console.log(error);
})

app.get('/hello',(req,res) => {
    return res.send("hello");
})

app.post('/api/services',servicesController.addServices);
app.get('/api/services',servicesController.getServices);

app.listen(5000,() => {
    console.log("Backend running at port 5000");
})