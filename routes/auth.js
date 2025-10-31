const express = require('express');
const { body } = require('express-validator');
const router = express.Router();
const authController = require('../controllers/authController');
const { isGuest } = require('../middleware/authMiddleware');

const validateUser = [
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 6 })
];

router.get('/login', isGuest, authController.getLogin);
router.post('/login', isGuest, validateUser, authController.postLogin);

router.get('/register', isGuest, authController.getRegister);
router.post('/register', isGuest, [
  ...validateUser,
  body('username').isLength({ min: 3 }).trim()
], authController.postRegister);

router.post('/logout', authController.logout);

module.exports = router;