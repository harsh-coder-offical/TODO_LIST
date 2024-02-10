// TodoInput.js
import React, { useState } from 'react'

export default function TodoInput({ addList }) {
    const [value, setValue] = useState('')

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <button style={{cursor:'pointer'}} onClick={() => addList(value)}>+</button>
        </>
    )
}
