const express = require('express');
const router = express.Router();
const service = require('../services/Service');

// GET todas
router.get('/peliculas', async (req, res) => {
  res.json(await service.getAll());
});

// GET por id
router.get('/peliculas/:id', async (req, res) => {
  const data = await service.getById(req.params.id);
  if (data) res.json(data);
  else res.status(404).json({ error: 'No encontrada' });
});

// POST
router.post('/peliculas', async (req, res) => {
  res.json(await service.create(req.body));
});

// PUT
router.put('/peliculas/:id', async (req, res) => {
  const data = await service.update(req.params.id, req.body);
  if (data) res.json(data);
  else res.status(404).json({ error: 'No encontrada' });
});

// DELETE
router.delete('/peliculas/:id', async (req, res) => {
  const ok = await service.remove(req.params.id);
  if (ok) res.json({ mensaje: 'Eliminada' });
  else res.status(404).json({ error: 'No encontrada' });
});

module.exports = router;