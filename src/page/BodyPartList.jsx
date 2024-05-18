import React from 'react';

const BodyPartList = ({ bodyParts, onBodyPartClick }) => {
  return (
    <div className="bg-gray-800 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-white mb-6">Body Parts</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {bodyParts.map((bodyPart) => (
          <li
            key={bodyPart}
            className="bg-gray-700 rounded-lg p-4 text-white cursor-pointer hover:bg-gray-600 transition-colors duration-300"
            onClick={() => onBodyPartClick(bodyPart)}
          >
            {bodyPart}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BodyPartList;