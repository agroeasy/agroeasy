const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

//API calls
app.get('/api',(req,res)=>{
    res.send({express:"Express at work here"});
});

if(process.env.NODE_ENV === 'production'){
    //serve the static files
    app.use(express.static(path.join(__dirname, 'client/build')));

    //Handle react routing, return all requests to react app
    app.get('*', function(req, res){
        res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}
app.listen(port, ()=>console.log(`Listening on port ${port}`));