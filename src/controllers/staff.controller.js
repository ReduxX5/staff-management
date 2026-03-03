const db = require('../config/db');

exports.callNext = async (req, res) => {
  const { serviceId } = req.params;

  const [rows] = await db.query(
    "SELECT * FROM tickets WHERE service_id = ? AND status = 'WAITING' ORDER BY id ASC LIMIT 1",
    [serviceId]
  );

  if (!rows.length) return res.json({ message: "No waiting tickets" });

  const ticket = rows[0];

  await db.query(
    "UPDATE tickets SET status = 'CALLED' WHERE id = ?",
    [ticket.id]
  );

  res.json({ message: "Ticket called", ticket });
};

exports.serveTicket = async (req, res) => {
  const { ticketId } = req.params;

  await db.query(
    "UPDATE tickets SET status = 'SERVED' WHERE id = ?",
    [ticketId]
  );

  res.json({ message: "Ticket served" });
};

exports.skipTicket = async (req, res) => {
  const { ticketId } = req.params;

  await db.query(
    "UPDATE tickets SET status = 'SKIPPED' WHERE id = ?",
    [ticketId]
  );

  res.json({ message: "Ticket skipped" });
};