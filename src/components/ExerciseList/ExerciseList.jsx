import React from 'react';
import ExerciseListItem from './ExerciseListItems';

const ExerciseList = ({ bodyPart, exercises, onExerciseClick }) => {
  return (
    <div className="bg-gray-800 min-h-screen p-6">
  <h1 className="text-3xl font-bold text-white mb-6">{bodyPart} Exercises</h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {exercises.map((exercise) => (
      <div key={exercise.id} className="bg-gray-700 rounded-lg shadow-md transition transform hover:scale-105">
        <ExerciseListItem
          exercise={exercise}
          onExerciseClick={onExerciseClick}
        />
      </div>
    ))}
  </ul>
</div>

  );
};

export default ExerciseList;