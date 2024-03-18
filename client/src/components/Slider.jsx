import React, { useState } from 'react';

const Slider = ({className ,min, max, value, label, setValue }) => {

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };

  return (
    <div className={"w-full "+className}>
      <p className='text-start mb-2'>{label}</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleChange}
        className="w-full"
      />
      <p className="text-start text-sm">{value}</p>
    </div>
  );
};

export default Slider;