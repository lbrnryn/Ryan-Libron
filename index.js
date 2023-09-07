const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');

app.set('views', './views');
app.use(express.static(path.join(__dirname, 'public')));
app.use("/css", express.static(path.join(__dirname, 'public')));
app.set('json spaces', 2);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.render("home"));

const port = process.env.PORT || 2000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
