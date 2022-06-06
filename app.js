const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorControllers = require('./controllers/error');
const db = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

db.execute('SELECT * FROM products');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

// SERVER
app.listen(3000, () =>{
    console.log(`App listening at http://localhost:3000`);
});