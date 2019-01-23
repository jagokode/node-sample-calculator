const express = require('express'),
  app = express(),
  bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  // console.log(req.body.num1);
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);
  let result = num1 + num2;

  res.send(`The result is ${result}`);
});

app.get('/bmi-calculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalc.html');
});

app.post('/bmi-calculator', (req, res) => {
  let berat = parseFloat(req.body.berat);
  let tinggi = parseFloat(req.body.tinggi);
  let bmi = berat / (tinggi * tinggi);

  res.send(`Your BMI is ${bmi}`);
});
app.listen(3000, () => console.log('Server listening to port 3000'));
