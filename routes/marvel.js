const { Router } = require('express');
const { getMarvelAll, getHeroById } = require('../controller/marvelController');
const router = Router();

router.get('/', getMarvelAll);
router.get('/:id', getHeroById);




module.exports = router;