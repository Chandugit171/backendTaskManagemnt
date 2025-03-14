const express = require('express');
const { createTask, getAllTasks, getTaskById, updateTask, deleteTask } = require('../controllers/taskController');
const protect = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add_task', createTask);
router.get('/get_all_tasks', getAllTasks);
router.get('/:id', getTaskById);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;