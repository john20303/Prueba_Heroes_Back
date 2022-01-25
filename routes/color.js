const { Router } = require('express');
const { getColor, postColor, getColorById } = require('../controller/colorController');

const router = Router();


router.get('/', getColor);
router.get('/:color', getColorById);
router.post('/', postColor);




module.exports = router;