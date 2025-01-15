const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')

// @desc   Get goals
// @route  GET /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find()

    res.status(200).json(goals)
})

// @desc   Set goal
// @route  POST /api/goals
// @access Private
const setgoal = asyncHandler(async (req, res) => {
    if (!req.body.text) {
        res.status(400)
        throw new Error('please add a text field')
        // throw new Error('please add a text field')  
    }
    const goal = await Goal.create({
        text: req.body.text
    })

    res.status(200).json(goal)
})

// @desc   Update goal
// @route  PUT /api/goals/:id
// @access Private
const Updategoal = asyncHandler(async (req, res) => {
    const goalId = req.params.id.trim();  // Remove any leading/trailing spaces or newlines



    const goal = await Goal.findById(goalId);


    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    const updatedGoal = await Goal.findByIdAndUpdate(goalId, req.body, { new: true });

    res.status(200).json(updatedGoal);
});


// @desc   Delete goal
// @route  DELETE /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
    const goalId = req.params.id;

    // Use findByIdAndDelete to find and delete the goal by ID
    const goal = await Goal.findByIdAndDelete(goalId);

    // If the goal doesn't exist, send a 400 response with an error message
    if (!goal) {
        res.status(400);
        throw new Error('Goal not found');
    }

    // Respond with a success message and the deleted goal's ID
    res.status(200).json({ id: goalId });
});



module.exports = {
    getGoals,
    setgoal,
    Updategoal,
    deleteGoal,
}