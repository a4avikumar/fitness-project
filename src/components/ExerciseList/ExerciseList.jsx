import React from 'react';
import ExerciseListItem from './ExerciseListItems';

const ExerciseList = ({ bodyPart, exercises, onExerciseClick }) => {
  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{bodyPart} Exercises</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {exercises.map((exercise) => (
          <ExerciseListItem
            key={exercise.id}
            exercise={exercise}
            onExerciseClick={onExerciseClick}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExerciseList;