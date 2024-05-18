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
               <div className="bg-gray-800 p-4 rounded-md">
               <Link to={`${excercise.id}/sets`} className="font-bold text-xl text-white hover:text-gray-300 transition-colors duration-200">
                 {excercise.name}
               </Link>
               <p className="text-gray-400 mt-2">{excercise.description}</p>
             </div>
            )}
        </div>
    )
}

export default Excercise
