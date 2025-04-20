import express from 'express'
import { createTask,getTasks,getTaskById,updateTask,deleteTask } from '../controllers/todoController.js'
const todoRouter = express.Router()
todoRouter.post('/',createTask)
todoRouter.get('/',getTasks)
todoRouter.get('/:id',getTaskById)
todoRouter.put('/:id',updateTask)
todoRouter.delete('/:id',deleteTask)

export default todoRouter