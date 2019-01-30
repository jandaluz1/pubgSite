const router = require('express').Router();
const pubg = require('./pubg');

router.get('/', (req, res, next) => res.send('Hello from Player'));
router.get('/:name', async (req, res, next) => {
  try {
    const response = await pubg.get(
      `/players?filter[playerNames]=${req.params.name}`
    );
    const matches = response.data.data[0].relationships.matches.data.map(
      match => match.id
    );
    const player = {
      id: response.data.data[0].id,
      matches: matches
    };
    res.status(200).json(player);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
