const router = require('express').Router();
const pubg = require('./pubg');

router.post('/', async (req, res, next) => {
  try {
    const promises = req.body.matches.map(id => pubg.get(`/matches/${id}`));
    const response = await Promise.all(promises);
    res.json(response.map(info => info.data));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
