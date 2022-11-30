const Task = require('../models/Task')
const asyncWrapper= require('../middleware/async')

const getAllTasks= asyncWrapper (async (req,res)=>{
    const tasks =  await Task.find()
    res.status(200).json({tasks})
})

const createTask= asyncWrapper (async (req,res)=>{
    const task = await Task.create(req.body)
    res.status(200).json({task})
})

const getTask = asyncWrapper (async (req,res)=>{
    const task = await Task.findById(req.params.id)
    res.status(200).json({task})
})

const updateTask = asyncWrapper (async (req,res)=>{
    const { id: taskID } = req.params
    const task =await Task.findByIdAndUpdate({ _id: taskID },req.body,{new:true,runValidators: true})
    res.status(200).json({task})
})

const deleteTask= asyncWrapper (async (req,res)=>{    
    await Task.findByIdAndDelete(req.params.id)
    res.status(200).json("Succesfully deleted")
})  

module.exports= {getAllTasks,createTask,getTask,updateTask,deleteTask}