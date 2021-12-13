const router = require('express').Router();

router.get('/', require(__dirname+'/gets/home'));

module.exports = router;
