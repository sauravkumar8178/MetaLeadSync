const { Router } = require('express');
const { signIn, signUp, signOut, resetPassword  } = require('../controllers/userController');

const router = Router();

router.route('/sign-up').post(signUp)
router.route('/sign-in').post(signIn)
router.route('/sign-out').post(signOut)
router.route('/reset-password').post(resetPassword)

module.exports = router;