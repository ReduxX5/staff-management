const db = require('../config/db');

exports.createTicket = async (req, res) => {
  const { service_id } = req.body;

  const queueNumber = "Q-" + Math.floor(Math.random() * 1000);

  await db.query(
    "INSERT INTO tickets (queue_number, service_id, user_id) VALUES (?, ?, ?)",
    [queueNumber, service_id, req.user.id]
  );

  res.json({ message: "Ticket created", queueNumber });
};

exports.getMyTickets = async (req, res) => {
  const [rows] = await db.query(
    "SELECT * FROM tickets WHERE user_id = ?",
    [req.user.id]
  );

  res.json(rows);
};