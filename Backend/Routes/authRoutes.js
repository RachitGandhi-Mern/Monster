const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authcontrollers');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/user', authController.getUser);

module.exports = router;
