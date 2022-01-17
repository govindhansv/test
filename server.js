
const PORT = 8000;

const express = require('express');
const app = express();

// getting and posting methods

app.get('/',(req,res)=>{
    res.send('Welcome to Backend! Bitch ')
})


app.listen(PORT,()=>{
  console.log(`server is listening on ${PORT}`);
})