const express = require('express')
var app = express()

app.listen(5000, function(){
console.log('listeninf');
});

app.use(express.static("public"));