import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { excerciseMap } from './page/FormCheck';
import SetInput from './components/ExerciseDetail/SetInput';
import { getDB } from './lib/DB/initDB';
import { addSet, getSets } from './lib/DB/makeUser';

function Sets() {
  const params = useParams();
  const { excerciseId, excerciseName } = params;

  const [newSet, setNewSet] = useState({
    reps: 0,
    weight: 0,
  })

  const DB = getDB()

  const sets = getSets(excerciseId, excerciseName)

  return (
    
    <div className="bg-gray-900 min-h-screen p-8 flex items-center justify-center">
  <div className="bg-gray-800 rounded-xl shadow-xl p-8 max-w-2xl w-full">
    <h1 className="text-4xl font-extrabold text-white mb-8 text-center">
      {`${excerciseId.toString().toUpperCase()} : ${excerciseName}`}
    </h1>
    <div className="flex flex-col gap-6">
      {sets.map(({ reps, weight }, index) => (
        <div key={index} className="flex flex-col gap-3 bg-gray-700 rounded-lg p-6 shadow-md transition-transform transform hover:scale-105 border border-gray-600">
          <p className="text-white font-semibold text-lg">Reps: {reps}</p>
          <p className="text-white font-semibold text-lg">Weight: {weight} kg</p>
        </div>
      ))}
      <div className="flex flex-col gap-4 p-6 bg-gray-700 rounded-lg shadow-md">
        <div className="flex flex-col gap-4">
          <label className="text-white font-semibold" htmlFor="weight">Weight (in kg)</label>
          <input
            id="weight"
            className="w-full px-4 py-3 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            type="number"
            value={newSet.weight}
            onChange={(e) => setNewSet((s) => ({ ...s, weight: e.target.value }))}
            placeholder="Weight"
          />
        </div>
        <div className="flex flex-col gap-4">
          <label className="text-white font-semibold" htmlFor="reps">Reps</label>
          <input
            id="reps"
            className="w-full px-4 py-3 bg-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
            type="number"
            value={newSet.reps}
            onChange={(e) => setNewSet((s) => ({ ...s, reps: e.target.value }))}
            placeholder="Reps"
          />
        </div>
        <button
          onClick={() => addSet(excerciseId, excerciseName, newSet)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition-colors duration-300"
        >
          Add Set
        </button>
      </div>
    </div>
  </div>
</div>

  );
}

export default Sets;
