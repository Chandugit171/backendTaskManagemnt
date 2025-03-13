const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add_task', protect, createTask);
router.get('/get_all_tasks', protect, getAllTasks);
router.get('/:id', protect, getTaskById);
router.put('/:id', protect, updateTask);
router.delete('/:id', protect, deleteTask);

module.exports = router;