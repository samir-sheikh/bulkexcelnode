const { Router } = require('express');
const express = require('express');
const app = express();

let xlsxParser = require('xlsx-parse-json') ;



app.get('/add' , (req, res ) =>{
    return res.status(200).json({
        "massage":"working properly......."
    })
})


app.get('/file' , (req, res ) =>{
    return  xlsxParser
  .onFileSelection('./Financial Sample.xlsx')
  .then(data => {
    var parsedData = data;
    res.status(200).json({parsedData})
  });
    
    
})

app.listen(4000 , () => {console.log("Server is running port no 4000");})