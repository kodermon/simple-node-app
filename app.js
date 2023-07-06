const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.send('<h1>A simple node appplication</h1>')
})


app.listen('80', ()=>{
    console.log('Server listening on port 80');
})
