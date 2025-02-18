const { allLead } = require('../controllers/dashboardController');
const { Router } = require('express');
const router = Router();

router.route('/all-lead').get(allLead);

module.exports = router;