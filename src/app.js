const express = require('express');

const validatrNane = require('./middlewares/validateName');
const validatePrice = require('./middlewares/validatePrice');
const validateDescriptions = require('./middlewares/validateDescriptions');
const validateCreatedAt = require('./middlewares/validateCreatedAt');
const validateRating = require('./middlewares/validateRating');
const validadeDifficulty = require('./middlewares/validadeDifficulty');
const generateToken = require('./utils/generateToken');
const auth = require('./middlewares/auth');

const app = express();
app.use(express.json());

app.post('/activities',
  auth,
  validatrNane,
  validatePrice,
  validateDescriptions,
  validateCreatedAt,
  validateRating,
  validadeDifficulty,
(_req, res) => res.status(201).json({ message: "Atividade cadastrada com sucesso!" }));

app.post('/signup', (req, res) => {
  const { email, passaword, firstName, phone } = req.body;

  if([email, passaword, firstName, phone].includes(undefined)) {
    res.status(401).json({ message: "Campos ausentes!" })
  }
  const token = generateToken();

  return res.status(200).json({ token });
});

module.exports = app;