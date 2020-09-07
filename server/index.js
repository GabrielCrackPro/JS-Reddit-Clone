const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const mongose = require('mongose')

const port = process.env.PORT || 3000

const app = express()

const DB_CONNECTION_URL = 'mongodb+srv://admin:AFKnfb3UixWGSuEo@cluster0.xpdrh.mongodb.net/redditdb?retryWrites=true&w=majority'
mongose.connect(DB_CONNECTION_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifedTopology: true
})
const redditSchema = mongose.Schema({
    user: String,
    post: String,
    timeStamp: String
})
mongose.model('reddit-posts', redditSchema)

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