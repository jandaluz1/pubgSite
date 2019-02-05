const router = require('express').Router();
const pubg = require('./pubg');
const { SEASON } =require('../secret');

// router.use('/', (req, res, next) => res.send('Hello from Stats'));

router.use('/:id', async (req, res, next) => {
  try {
    const response = await pubg.get(
      `/players/${req.params.id}/seasons/${SEASON}`
    );
    const stats = response.data.data.attributes.gameModeStats;
    res.status(200).json(stats);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
