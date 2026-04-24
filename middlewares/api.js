module.exports = (req, res, next) => {
  const key = req.headers['x-api-key'];

  if (key === '12345') {
    next();
  } else {
    res.status(403).json({ error: 'API KEY inválida' });
  }
};