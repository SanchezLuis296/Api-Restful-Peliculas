const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET = 'mi_clave_secreta';

// Usuario simulado (puedes cambiarlo)
const USER = {
  username: 'admin',
  password: '1234'
};

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (username === USER.username && password === USER.password) {
    const token = jwt.sign({ username }, SECRET, { expiresIn: '1h' });

    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

module.exports = router;