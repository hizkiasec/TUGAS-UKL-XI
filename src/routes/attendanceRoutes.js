const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/attendanceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, attendanceController.recordAttendance);
router.get('/history/:user_id', authMiddleware, attendanceController.history);
router.get('/summary/:user_id', authMiddleware, attendanceController.summary);
router.post('/analysis', authMiddleware, attendanceController.analysis);

module.exports = router;
