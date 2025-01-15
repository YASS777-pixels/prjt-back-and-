const express = require('express')
const router = express.Router()
const {
    getGoals,
    setgoal,
    Updategoal,
    deleteGoal,
} = require('../controllers/goalcontroller')

router.route('/').get(getGoals).post(setgoal)
router.route('/:id').delete(deleteGoal).put(Updategoal)

module.exports = router