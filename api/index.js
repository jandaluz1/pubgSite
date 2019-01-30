const router = require('express').Router();

router.get('/', (req, res, next) => res.send('Hello World'));
router.use('/player', require('./player'));
router.use('/stats', require('./stats'));
router.use('/match', require('./match'));

module.exports = router;
