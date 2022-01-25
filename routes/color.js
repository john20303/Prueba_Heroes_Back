const { Router } = require('express');
const { getColor, postColor } = require('../controller/colorController');

const router = Router();


router.get('/', getColor);
router.post('/', postColor);




module.exports = router;