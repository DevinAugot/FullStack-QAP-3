var router = require('express').Router();

if(DEBUG) {
    console.log('ROUTE: /api/menu');
}

const menuRouter = require('./menu')
router.use('/menu', menuRouter);


module.exports = router;