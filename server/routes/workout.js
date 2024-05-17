const express = require('express');
const Workout = require('../model/Workout'); // Adjust the path based on your structure

const router = express.Router();

// Add Workout
router.post('/workout', async (req, res) => {
    try {
        const { userId, date, exercises } = req.body;

        const newWorkout = new Workout({ userId, date, exercises });
        await newWorkout.save();

        res.status(201).json({ message: 'Workout added successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Get Workouts
router.get('/workouts/:userId', async (req, res) => {
    try {
        const { userId } = req.params;

        const workouts = await Workout.find({ userId }).sort({ date: -1 });

        res.status(200).json(workouts);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
