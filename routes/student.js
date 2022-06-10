const express = require('express');
const router = express.Router();
const { getAllStudent, 
    createStudent, 
    deleteStudent, 
    updateStudent , 
    getSingleStudent
} = require('../controllers/StudenteController.JS');

 
// router.get('/', getAllStudent );
// router.get('/:id', getSingleStudent );
// router.post('/', createStudent);
// router.delete('/:id', deleteStudent);
// router.put('/:id', updateStudent);
// router.patch('/:id', updateStudent);

router.route('/').get(getAllStudent).post(createStudent);
router.route('/:id').get(getSingleStudent).put(updateStudent).patch(updateStudent).delete(deleteStudent);



module.exports = router;  