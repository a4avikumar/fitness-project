import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { excerciseMap } from './page/Home';

function Excercise() {
    const params = useParams();
    console.log({ params })
    const excerciseId = params.excerciseId;
    const excercise = excerciseMap[excerciseId];
    if (excercise === undefined) return <div className="">Dont have excercise called {excerciseId}</div>
    return (
        <div>
            {excercise.map(excercise => 
   <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 transform transition-transform duration-200 hover:scale-105">
   <Link to={`sets`} className="font-bold text-xl text-white hover:text-gray-300 transition-colors duration-200">
     {excercise.name}
   </Link>
   <p className="text-gray-400 mt-4">{excercise.description}</p>
 </div>
 
     
        
            )}
        </div>
    )
}

export default Excercise
