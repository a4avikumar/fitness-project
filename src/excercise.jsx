import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { excerciseMap } from './page/FormCheck';

function Excercise() {
    const params = useParams();
    console.log({ params })
    const excerciseId = params.excerciseId;
    const excercise = excerciseMap[excerciseId];
    if (excercise === undefined) return <div className="">Dont have excercise called {excerciseId}</div>
    return (
<div className="bg-gray-900 min-h-screen flex items-center justify-center px-4">
  <div className="grid grid-cols-1 gap-6 max-w-3xl">
    {excercise.map((exercise, index) => (
      <div key={index} className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
        <Link to={`${exercise.name}/sets`} className="block p-6">
          <h2 className="text-xl font-semibold text-white mb-2">{exercise.name}</h2>
          <p className="text-gray-300 text-sm">{exercise.description}</p>
        </Link>
        <div className="bg-gray-800 p-4">
          <Link to={`${exercise.name}/sets`} className="text-blue-500 hover:text-blue-600 font-semibold transition-colors duration-200">
            View Sets
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>
  
    
    
    )
}

export default Excercise
