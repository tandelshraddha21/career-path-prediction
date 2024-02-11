import React, { useState } from 'react';

const Options = ({ selectedOption, handleOptionChange, options }) => {
    return (
        <div className="mt-5">
            {
                options.map((option,index) => <div className="flex items-center mb-4">
                    <input
                        key={option}
                        type="radio"
                        id={"option"+index}
                        name="options"
                        value={option}
                        className="form-radio text-indigo-600 h-5 w-5"
                        checked={selectedOption === option}
                        onChange={handleOptionChange}
                    />
                    <label htmlFor={"option"+index} className="ml-1 text-xl">
                        {option}
                    </label>
                </div>)
            }
        </div>
    );
};

export default Options;
