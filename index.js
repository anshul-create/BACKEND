require('dotenv').config()



const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
    res.send('Hello World!')

})

app.get('/twitter', (req, res) => {
    res.send('NIGGA')
})

app.get('/login', (req, res) => {
    res.send('<h1> LOGIN AT HERE </h1> ')

})


app.get('/youtube', (req, res) => {
    res.send('<h3> LPDA </h3> ')

})




app.listen (process.env.PORT , () => {
    console.log(`Example app listening on port ${port}`)

})