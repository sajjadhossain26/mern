const express = require('express');
const { getAllAdmin, createAdmin, getSingleAdmin, updateAdmin, deleteAdmin } = require('../controllers/adminController');
const loginAdmin = require('../controllers/authAdmin');
const router= express.Router();

router.get('/', getAllAdmin)
router.get('/:id', getSingleAdmin)
router.put('/:id', updateAdmin)
router.patch('/:id', updateAdmin)
router.delete('/:id', deleteAdmin)
router.post('/', createAdmin)
router.post('/login', loginAdmin)


module.exports= router