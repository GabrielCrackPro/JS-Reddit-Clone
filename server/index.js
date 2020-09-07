const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongoose = require('mongoose')

const port = process.env.PORT || 3000

const app = express()

const DB_CONNECTION_URL = 'mongodb+srv://admin:AFKnfb3UixWGSuEo@cluster0.xpdrh.mongodb.net/redditdb?retryWrites=true&w=majority'
mongoose.connect(DB_CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})
const redditSchema = mongoose.Schema({
    user: String,
    post: String,
    timeStamp: String
})
mongoose.model('reddit-posts', redditSchema)

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