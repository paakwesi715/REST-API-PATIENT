const express = require('express')
const app = express()
const port = 8080
const mongoose = require('mongoose')


import patientsSchema from mongoose.Model

app.get('/',(req,res)=>{
    console.log('Welcome to patients emergency portal')
})

app.put('/model', (req,res)=>{
    res.send(res.body)
    try {
        
    } catch (error) {
        
    }
})


mongoose.connect('mongodb+srv://king:King123@kamsvilla.6uepadh.mongodb.net/REST API-PATIENT').then(()=>{
    console.log('MongoDB is now connected').catch('erreor')
})
app.listen(port,()=>{
    console.log('the Rest API is now running on port'+" "+port)
})
