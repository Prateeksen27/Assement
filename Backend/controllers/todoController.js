import TaskModel from "../models/todoModel.js";


export const createTask = async (req, res) => {
    try {
        const { title, description,id } = req.body;

        const task = new TaskModel({
            title,
            description,
            user_id: id
        });

        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

export const getTasks = async (req, res) => {

    try {
        const {id}=req.body
        const tasks = await TaskModel.find({ user_id:id });
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

export const getTaskById = async (req, res) => {
    try {
        const {id} = req.body
        const task = await TaskModel.findOne({ _id: req.params.id, user_id: id });

        if (!task) return res.status(404).json({ message: 'Task not found' });

        res.json(task);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

export const updateTask = async (req, res) => {
    try {
        const { title, description, completed,id } = req.body;

        const updatedTask = await TaskModel.findOneAndUpdate(
            { _id: req.params.id, user_id: id },
            { title, description, completed },
            { new: true }
        );

        if (!updatedTask) return res.status(404).json({ message: 'Task not found' });

        res.json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

export const deleteTask = async (req, res) => {
    try {
        const {id}=req.body
        const deletedTask = await TaskModel.findOneAndDelete({ _id: req.params.id, user_id: id });

        if (!deletedTask) return res.status(404).json({ message: 'Task not found' });

        res.json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
