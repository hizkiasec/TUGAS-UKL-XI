const { DataTypes } = require('sequelize');
const db = require('../config/db');

const User = db.define('User', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.ENUM('student','staff','admin'), defaultValue: 'student' },
  class_or_position: { type: DataTypes.STRING, allowNull: true }
}, {
  tableName: 'users',
  timestamps: true
});

module.exports = User;
