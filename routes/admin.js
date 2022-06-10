const express = require('express');
const router = express.Router();
const { getAllAdmin, 
    getSingleAdmin, 
    createAdmin, 
    updateSingleAdmin, 
    deleteSingleAdmin 
} = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');




// router.get('/', getAllAdmin);
// router.post('/', createAdmin);
// router.get('/:id', getSingleAdmin);
// router.put('/:id', updateSingleAdmin);
// router.patch('/:id', updateSingleAdmin);
// router.delete('/:id', deleteSingleAdmin);

router.post('/login', adminLogin)
router.route('/').get(getAllAdmin ).post(createAdmin);
router.route('/:id').put(updateSingleAdmin).patch(updateSingleAdmin).delete(deleteSingleAdmin).get(getSingleAdmin);



module.exports = router;






