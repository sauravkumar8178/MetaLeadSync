const { Router } = require('express');
const { addLead, getLead, deleteLead, editLead } = require('../controllers/leadController');
const router = Router();

router.route('/add-lead').post(addLead);
router.route('/edit-lead').post(editLead);
router.route('/delete-lead').delete(deleteLead);
router.route('/delete-lead/:id').get(deleteLead);

module.exports = router;