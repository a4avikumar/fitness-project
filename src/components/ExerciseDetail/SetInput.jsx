import React from 'react';

const SetInput = ({ text, setNumber, reps, onRepsChange }) => {
  return (
    <div className="flex items-center mb-2">
      <span className="text-white mr-2">{text}:</span>
      <input
        type="number"
        value={reps}
        onChange={(e) => onRepsChange(e.target.value)}
        className="bg-gray-700 text-white rounded-md py-1 px-2"
      />
    </div>
  );
};

export default SetInput;