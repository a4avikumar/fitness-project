import React from 'react';
import ExerciseDetail from '../components/ExerciseDetail/ExerciseDetail';
import { exerciseData } from '../utils/exerciseData';

const ExerciseDetailPage = ({ exerciseId }) => {
  const exercise = exerciseData.find((ex) => ex.id === exerciseId);

  return <ExerciseDetail exercise={exercise} />;
};

export default ExerciseDetailPage;