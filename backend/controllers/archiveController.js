const asyncHandler = require('express-async-handler')

const Archive = require('../models/archiveModel')
const User = require('../models/userModel')

// @desc    Get archives
// @route   GET /api/archives
// @access  Private
const getArchive = asyncHandler(async (req, res) => {
    const archives = await Archive.find()

    res.status(200).json(archives)
})

// @desc    Set archive
// @route   POST /api/archive
// @access  Private
const setArchive = asyncHandler(async (req, res) => {
    if (!req.body.name || !req.body.stateArchive) {
        res.status(400)
        throw new Error('Please add a text field')
    }

    const archive = await Archive.create({
        name: req.body.name,
        year: req.body.year,
        stateArchive: req.body.stateArchive,
        description: req.body.description

    })



    res.status(200).json(archive)
})

// // @desc    Update goal
// // @route   PUT /api/goals/:id
// // @access  Private
// const updateGoal =  asyncHandler(async (req, res) => {
//     const goal = await Goal.findById(req.params.id)

//     if(!goal) {
//         res.status(400)
//         throw new Error('Wrong id')
//     }

//     if(!req.user) {
//         res.status(401)
//         throw new Error('User not found')
//     }

//     if(goal.user.toString() !== req.user.id) {
//         res.status(401)
//         throw new Error('User not authorized')
//     }

//     const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true, })

//     res.status(200).json(updatedGoal)
// })

// // @desc    Delete goal
// // @route   DELETE /api/goals/:id
// // @access  Private
// const deleteGoal =  asyncHandler(async (req, res) => {
//     const goal = await Goal.findById(req.params.id)

//     if(!goal) {
//         res.status(400)
//         throw new Error('Wrong id')
//     }

//     if(!req.user) {
//         res.status(401)
//         throw new Error('User not found')
//     }

//     if(goal.user.toString() !== req.user.id) {
//         res.status(401)
//         throw new Error('User not authorized')
//     }

//     await goal.remove()

//     res.status(200).json({ id: req.params.id })
// })

module.exports = {
    getArchive,
    setArchive
}