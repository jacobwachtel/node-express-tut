const express = require('express');
const app = express();

// let { people } = require('./data');


const people = require('./routes/people');
const auth = require('./routes/auth');

//static assets
app.use(express.static('./methods-public'))
// Parse Form Data
app.use(express.urlencoded({ extended: false }))
// Parse json
app.use(express.json())

app.use('/login', auth)

app.use('/api/people', people)
// app.use('/login', auth)

app.listen(5000,()=>{
   console.log('Server is listening in Port# 5000...')
})