import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { excerciseMap } from './page/Home';
import SetInput from './components/ExerciseDetail/SetInput';

function Sets() {
  const params = useParams();

  const [sets, setSets] = useState([]);
  const [weights, setWeights] = useState([]);

  const handleAddSet = () => {
    setSets([...sets, { reps: 0 }]);
    setWeights([...weights, { weight: 0 }]);
  };

  const handleChange = (index, reps, weight) => {
    const newSets = [...sets];
    const newWeights = [...weights];
    newSets[index].reps = reps;
    newWeights[index].weight = weight;
    setSets(newSets);
    setWeights(newWeights);
  };

  const { excerciseId, id } = params;
  const exercise = excerciseMap[excerciseId];
  const subExercise = exercise[+id];

  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">{exercise.name}</h1>
      <div className="mb-6">
        {sets.map((_, index) => (
          <div key={index} className="bg-gray-700 p-4 rounded-lg mb-4">
            <h2 className="text-xl text-white font-semibold mb-4">Set {index + 1}</h2>
            <SetInput
              text="Reps"
              value={sets[index].reps}
              onChange={(reps) => handleChange(index, reps, weights[index].weight)}
            />
            <SetInput
              text="Weight"
              value={weights[index].weight}
              onChange={(weight) => handleChange(index, sets[index].reps, weight)}
            />
          </div>
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
}

export default Sets;
