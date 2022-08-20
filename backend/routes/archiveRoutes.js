const express = require('express')
const router = express.Router()
const {
    getArchive, setArchive,
} = require('../controllers/archiveController')

//const {protect} = require('../middleware/authMiddleware')

router.route('/').get(getArchive).post(setArchive)
//router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router