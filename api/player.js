const router = require('express').Router();
const pubg = require('./pubg');

router.get('/', (req, res, next) => res.send('Hello from Player'));
router.use('/:name', async (req, res, next) => {
  try {
    const response = await pubg.get(
      `/players?filter[playerNames]=${req.params.name}`
    );
    const player = {
      id: response.data.data[0].id,
      matches: response.data.data[0].relationships.matches.data
    };
    res.json(player);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
