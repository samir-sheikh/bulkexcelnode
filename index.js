require('dotenv').config()
const xlsx = require('xlsx');
const fs = require('fs')
const express = require('express');
const app = express();
const morgan = require('morgan')
const cors = require('cors');
const port = process.env.PORT
const database = ('./mongodb')

let xlsxParser = require('xlsx-parse-json') ;

//middlewaer
app.use(cors());
app.use(morgan('dev'));





app.get('/add' , (req, res ) =>{
    return res.status(200).json({
        "massage":"working properly......."
    })
})






const wb = xlsx.readFile('./test.xlsx');
// console.log(wb);

const workSheet = wb.Sheets['Sheet1']

// console.log(workSheet);

const data = xlsx.utils.sheet_to_json(workSheet);

app.get('/file' , (req, res ) =>{
  return  res.status(200).json(data)
  
})

// console.log(data);

app.listen(port , () => {console.log(`Server is running port no ${port}`);})