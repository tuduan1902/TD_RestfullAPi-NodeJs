const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorControllers = require('./controllers/error');
const sequelize = require('./util/database');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorControllers.get404);

sequelize
    .sync()
    .then(result => {
        app.listen(3000, () =>{
            console.log(`App listening at http://localhost:3000`);
        });
    })
    .catch(err => console.log(err)) 

// SERVER
