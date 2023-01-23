module.exports = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    res.status(400).send({ message: "O campo name é obrigatório" });
  };

  if (name.length < 4) {
    res.status(400).send({ message: "O campo name deve ter pelo menos 4 caracteres" });
  };
    next();
};