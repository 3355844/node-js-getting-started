const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const PORT = process.env.PORT || 5000;


app.use(express.static(path.join(__dirname, 'public')));


// express()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//   .get('/', (req, res) => res.render('pages/index'))
// express.listen(PORT, () = > console.log(`Listening on ${ PORT }`)
// )
// ;

http.listen(5000, function () {
    console.log('Listen on 5000 PORT... ');
});

app.get('/', function (req, res) {
    console.log('Cone to get / URL and give index page');
    res.render('pages/index');
});