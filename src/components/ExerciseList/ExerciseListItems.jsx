import React from 'react';
import { Link } from 'react-router-dom';

const ExerciseListItem = ({ exercise, onExerciseClick }) => {
  return (
    <Link to={"/excercises/" + (exercise.name).toLocaleLowerCase()}>
    <li
      className="bg-gray-700 h-[calc(100vh/3)] rounded-lg p-4 text-white cursor-pointer hover:bg-gray-600 transition-colors duration-300"
      // onClick={() => onExerciseClick(exercise.id)}
    >
        {exercise.name}
      {/* {exercise.name} */}
    </li>
    </Link>
  );
};

export default ExerciseListItem;