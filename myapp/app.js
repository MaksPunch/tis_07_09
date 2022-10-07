var express = require('express')
var app = express()
app.use(express.static('files'))
app.use('/static', express.static(__dirname + '/public'))
var router = express.Router();
var corgis = require('./corgis');

app.use('/corgis', corgis);

app.get('/', function (req, res) {
  res.send('Запрошена информация!')
})

app.listen(8080, function () {
  console.log('Port 8080 listening')
})

app.post('/', function (req, res) {
  res.send('Получен запрос POST')
})

app.put('/user/:id', function (req, res) {
  res.send('Got a PUT request at /user')
})

app.get(/.*fly$/, function (req, res) {
  res.send('/.*fly$/');
});

app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})

app.get('/example/a', function (req, res) {
  res.send('Hello from A!');
});


app.get(
  '/example/b',
  function (req, res, next) {
    console.log(
      'the response will be sent by the next function ...'
    );
    next();
  },
  function (req, res) {
    res.send('Hello from B!');
  }
);

var cb0 = function (req, res, next) {
  console.log('CB0');
  next();
};

var cb1 = function (req, res, next) {
  console.log('CB1');
  next();
};

var cb2 = function (req, res) {
  res.send('Hello from C!');
};

app.get('/example/c', [cb0, cb1, cb2]);

app
  .route('/book')
  .get(function (req, res) {
    res.send('Booked a race');
  })
  .post(function (req, res) {
    res.send('Add a book');
  })
  .put(function (req, res) {
    res.send('Update the book');
  });


app.use(function (req, res, next) {
  res.status(404).send('Не найдено')
})
