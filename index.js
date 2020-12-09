const express = require('express')
const app = express();
const port = 3001;

app.get('/', ( req,res) => {
    res.send('Hello World!' )
    console.log(' Hi ');
})
app.get('/sabah', ( req,res) => {
    res.send('gallery!' )
    console.log(' memon');
})
app.get('/gallery', ( req,res) => {
    res.send('pics!' )
    console.log(' Waris');
})
app.get('/album', ( req,res) => {
    res.send('family pics!' )
    console.log(' family time');
})
app.get('/home', ( req,res) => {
    res.send('happy!' )
    console.log('my world');
})
app.get('/home1', ( req,res) => {
    res.send('main memu!' )
    console.log(' welcome to our page :) ');
})
app.get('/gallery1', ( req,res) => {
    res.send('pictures!' )
    console.log(' group pics :) ');
})
app.get('/cart', ( req,res) => {
    res.send(' shopping !' )
    console.log(' your Favourit items :) ');
})
app.get('/onlinePayment', ( req,res) => {
    res.send('debit card!' )
    console.log(' welcome to our page :) ');
})
app.get('/fastCash', ( req,res) => {
    res.send('total amount!' )
    console.log(' thank you :) ');
})

app.listen(port, () => {
    console.log(`Example app listeningon port ${port}!`)
})
