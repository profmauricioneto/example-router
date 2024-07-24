const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

const index = require('./routes/index');
const product = require('./routes/product-route')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.use('/', index);
app.use('/products', product);
app.use((req, res) => {
    res.status(404).send({
        status: 404,
        error: 'Not Found',
    });
});


app.listen(port, () => {
    console.log(`Server listen in http://localhost:${port}`);
});