const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose'); //npm install mongoose
const blogRoutes = require('./routes/blogRoutes');

//express app
const app = express();

//connect to mongodb, <username> = username access, <password> = password used, ? = database name
const dbURI = 'mongodb+srv://netninja:1234nodejs@nodetuts.07zju.mongodb.net/node-tuts?retryWrites=true&w=majority';
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => {
    console.log('database connected');
    //listen for requests
    app.listen(process.env.PORT || 8000); //mismong environment daw ng kompyuter
})
.catch((err, req) => console.log(err))

//register view engine
app.set('view engine', 'ejs'); 

//middlewares and static files for styling such as style.css
app.use(express.static('public')); //public, name of style.css folder
app.use(express.urlencoded({extended: true})); //for post request handler ACCEPTING DATA
app.use(morgan('dev')); //dev for morgan dependency

//divided group in a
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'})
});

//blog routes
app.use('/blogs', blogRoutes);

//404 page
app.use((req, res) => {
    res.render('404', {title: '404 Error'});
}); 