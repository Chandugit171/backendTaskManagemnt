const taskModel = require("../models/taskModel");

exports.createTask = async (req, res) => {
    const { title, description, completed } = req.body;
    const task = new taskModel({ title, description, completed, userId: req.user.id });
    await task.save();
    res.status(201).json(task);
  };
  
  exports.getAllTasks = async (req, res) => {
    const tasks = await taskModel.find({ userId: req.user.id });
    res.json(tasks);
  };
  
  exports.getTaskById = async (req, res) => {
    const task = await taskModel.findById(req.params.id);
    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  };
  
  exports.updateTask = async (req, res) => {
    const task = await taskModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }
    res.json(task);
  };
  
  exports.deleteTask = async (req, res) => {
    const task = await taskModel.findByIdAndDelete(req.params.id);
    if (!task || task.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Task not found or unauthorized' });
    }
    res.json({ message: 'Task deleted successfully' });
  };