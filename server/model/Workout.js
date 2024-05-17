const mongoose = require('mongoose');

const WorkoutSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    exercises: [
        {
            name: { type: String, required: true },
            weight: { type: Number, required: true },
            reps: { type: Number, required: true },
        }
    ],
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;
