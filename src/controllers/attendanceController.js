const Attendance = require('../models/Attendance');
const User = require('../models/User');
const { Op } = require('sequelize');
const sequelize = require('../config/db');

exports.recordAttendance = async (req, res) => {
  try {
    const { userId, date, checkInTime, note, status } = req.body;
    if (!userId || !date) return res.status(400).json({ message: 'userId & date required' });

    const exist = await Attendance.findOne({ where: { userId, date } });
    if (exist) return res.status(400).json({ message: 'Sudah ada catatan presensi untuk user pada tanggal tersebut' });

    const att = await Attendance.create({ userId, date, checkInTime: checkInTime || null, note, status: status || 'present' });
    res.status(201).json({ message: 'Presensi tercatat', attendance: att });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.history = async (req, res) => {
  try {
    const { user_id } = req.params;
    const rows = await Attendance.findAll({ where: { userId: user_id }, order: [['date','DESC']] });
    res.json({ history: rows });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.summary = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { month, year } = req.query;
    const now = new Date();
    const m = month || (now.getMonth() + 1);
    const y = year || now.getFullYear();

    const start = `${y}-${String(m).padStart(2,'0')}-01`;
    const end = `${y}-${String(m).padStart(2,'0')}-31`;

    const rows = await Attendance.findAll({
      where: {
        userId: user_id,
        date: { [Op.between]: [start, end] }
      }
    });

    const total = rows.length;
    const counts = rows.reduce((acc, r) => { acc[r.status] = (acc[r.status]||0) + 1; return acc; }, {});
    res.json({ user_id, month: m, year: y, totalRecords: total, counts });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.analysis = async (req, res) => {
  try {
    const { startDate, endDate, groupBy } = req.body;
    if (!startDate || !endDate) return res.status(400).json({ message: 'startDate & endDate required' });

    const groupField = groupBy === 'class_or_position' ? 'class_or_position' : 'role';

    const sql = `
      SELECT u.${groupField} as groupKey,
             SUM(case when a.status = 'present' then 1 else 0 end) as presentCount,
             COUNT(a.id) as totalCount,
             (SUM(case when a.status = 'present' then 1 else 0 end)/COUNT(a.id))*100 as percentPresent
      FROM attendances a
      JOIN users u ON a.userId = u.id
      WHERE a.date BETWEEN :start AND :end
      GROUP BY u.${groupField}
      ORDER BY percentPresent DESC
    `;
    const results = await sequelize.query(sql, {
      replacements: { start: startDate, end: endDate },
      type: sequelize.QueryTypes.SELECT
    });
    res.json({ startDate, endDate, groupBy: groupField, results });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
