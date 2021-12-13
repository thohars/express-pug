const router = require('express').Router();

router.get('/', require(__dirname+'/gets/home'));
router.get('/rss', require(__dirname+'/gets/rss'));

module.exports = router;
