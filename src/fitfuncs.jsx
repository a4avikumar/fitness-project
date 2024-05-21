import React, { useState } from 'react';
import ExercisesPage from './page/ExercisesPage'
import ExerciseDetailPage from './page/ExerciseDetailPage';

export const FitFuncs = () => {
  const [selectedExerciseId, setSelectedExerciseId] = useState(null);

  const handleExerciseClick = (exerciseId) => {
    setSelectedExerciseId(exerciseId);
  };

  return (
    <div>
      {selectedExerciseId ? (
        <ExerciseDetailPage exerciseId={selectedExerciseId} />
      ) : (
        <ExercisesPage onExerciseClick={handleExerciseClick} />
      )}
    </div>    
  );
};
