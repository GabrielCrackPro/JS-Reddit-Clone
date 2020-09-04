const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const monk = require('monk')

const port = process.env.PORT || 3000

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('common'))

app.get('/', (req,res)=>{
    res.json({
        message: 'This is a reddit clone'
    })
})
app.post('/', (req,res)=>{
    console.log(req.body)
})

app.listen(port, ()=>{
    console.log('Listening on port' + ' ' + port)
})