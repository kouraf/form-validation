import React from 'react';
import "./Input.css"

export default function Input({ value, setValue, type, placeholder, error }) {
    return (
        <div className="input">
            <input className={error && "input-error"} onChange={e => setValue(e.target.value)} value={value} type={type} placeholder={placeholder} />
            <p>{error}</p>
        </div>
    )
}
