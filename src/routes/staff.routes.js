const router = require('express').Router();
const auth = require('../middleware/auth.middleware');
const role = require('../middleware/role.middleware');
const controller = require('../controllers/staff.controller');

// Call next ticket (STAFF only)
router.post(
  '/call-next/:serviceId',
  auth,
  role(['STAFF']),
  controller.callNext
);

// Mark ticket as served
router.put(
  '/serve/:ticketId',
  auth,
  role(['STAFF']),
  controller.serveTicket
);

// Skip ticket
router.put(
  '/skip/:ticketId',
  auth,
  role(['STAFF']),
  controller.skipTicket
);

module.exports = router;