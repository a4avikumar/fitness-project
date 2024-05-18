import React, { useState } from 'react';
import SetInput from './SetInput';

const ExerciseDetail = ({ exercise }) => {
  const [sets, setSets] = useState([]);

  const handleAddSet = () => {
    setSets([...sets, { reps: 0 }]);
  };

  const handleSetChange = (index, reps) => {
    const newSets = [...sets];
    newSets[index].reps = reps;
    setSets(newSets);
  };

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{exercise.name}</h1>
      <div className="mb-6">
        {sets.map((set, index) => (
          <SetInput
            key={index}
            setNumber={index + 1}
            reps={set.reps}
            onRepsChange={(reps) => handleSetChange(index, reps)}
          />
        ))}
      </div>
      <button
        onClick={handleAddSet}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add Set
      </button>
    </div>
  );
};

export default ExerciseDetail;