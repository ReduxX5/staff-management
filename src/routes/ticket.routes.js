const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const controller = require('../controllers/ticket.controller');

router.post('/', auth, role(['CUSTOMER']), controller.createTicket);
router.get('/my', auth, role(['CUSTOMER']), controller.getMyTickets);

module.exports = router;