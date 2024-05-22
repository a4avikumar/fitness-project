import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseListItem = ({ exercise, onExerciseClick }) => {
  return (
<Link to={"/excercises/" + (exercise.name).toLocaleLowerCase()} className="block w-full h-full">
  <li
    className="bg-gray-800 h-[calc(100vh/3)] rounded-lg p-6 text-white cursor-pointer hover:bg-gray-700 hover:shadow-lg transition-all duration-300 flex items-center justify-center transform hover:scale-105"
  >
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-2">{exercise.name}</h2>
      <div className="h-1 w-16 bg-blue-500 rounded-full mx-auto mb-4"></div>
      <p className="text-gray-300 text-sm">Click to view details</p>
    </div>
  </li>
</Link>



  );
};

export default ExerciseListItem;