import React from 'react'

function DropDown({ options, value, setValue, label }) {
    return (
        <div className='mb-4'>
                  <p className='text-start mb-2'>{label}</p>

            <select
                className='px-4 py-2 rounded-lg w-full'
                value={value}
                onChange={e => setValue(parseInt(e.target.value))}
            >
                {
                    options.map((val, idx) => <option value={idx}>{val}</option>)
                }

            </select>
        </div>
    )
}

export default DropDown