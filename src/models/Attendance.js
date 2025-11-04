const { DataTypes } = require('sequelize');
const db = require('../config/db');
const User = require('./User');

const Attendance = db.define('Attendance', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  date: { type: DataTypes.DATEONLY, allowNull: false },
  checkInTime: { type: DataTypes.TIME, allowNull: true },
  note: { type: DataTypes.STRING, allowNull: true },
  status: { type: DataTypes.ENUM('present','late','absent','permission'), defaultValue: 'present' }
}, {
  tableName: 'attendances',
  timestamps: true
});

User.hasMany(Attendance, { foreignKey: 'userId' });
Attendance.belongsTo(User, { foreignKey: 'userId' });

module.exports = Attendance;
