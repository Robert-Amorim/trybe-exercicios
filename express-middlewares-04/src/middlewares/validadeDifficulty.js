module.exports = (res, req, next) => {
  const { description } = req.body;
  const { difficulty } = description;

  const difficults = ['Fácil', 'Médio', 'Difícil']

  if(!difficults.includes(difficulty)) {
    return res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
  };
  next();

}