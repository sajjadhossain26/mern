const express = require('express');
const router= express.Router();
const { getAllAdmin, getSingleAdmin, deleteAdmin, createAdmin, updateAdmin, adminProfile, adminPost } = require('../controllers/adminController');
const { adminLogin } = require('../controllers/authController');
const {authCheck} = require('../middleware/authMiddleware')

// private route
router.get('/profile', authCheck , adminProfile)
router.get('/post', authCheck, adminPost)

// public route
router.get('/', getAllAdmin)
router.get('/:id', getSingleAdmin)
router.delete('/:id', deleteAdmin)
router.post('/', createAdmin)
router.put('/:id', updateAdmin)
router.patch('/:id', updateAdmin)
router.post('/login', adminLogin)


module.exports= router;