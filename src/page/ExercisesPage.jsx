import React from 'react';
import ExerciseList from '../components/ExerciseList/ExerciseList';
import { exerciseData } from '../utils/exerciseData';

const ExercisesPage = ({ onExerciseClick }) => {
  return (
    <ExerciseList
      exercises={exerciseData}
      onExerciseClick={onExerciseClick}
    />
  );
};

export default ExercisesPage;