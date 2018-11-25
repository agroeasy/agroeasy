const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');

const product = require('./routes/productRoute'); // Imports routes for the products
const producer = require('./routes/producerRoute'); // Imports routes for the producers

const  logoutAndSignin  = require('./routes/SignInAndOutRout');
const signUpUser  = require('./routes/signUpRoute');

const { connectToDB } = require('./helpers/db');

const app = express();
const server = http.createServer(app);
const { PORT = 4000 } = process.env;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/* Cross-Origin Resource Sharing CORS
To enable access of resources from our server */

if(process.env.NODE_ENV !== 'production'){
    app.use(cors());
}

app.use('/products', product);
app.use('/producers', producer);
app.use('/account', logoutAndSignin);
app.use('/account', signUpUser);

server.listen(PORT, async() => {
    await connectToDB();
    console.log(`Listening on port ${PORT}`); // eslint-disable-line no-console
});
