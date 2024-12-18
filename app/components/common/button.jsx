import React from 'react'

const Button = ({ text,  className }) => {
    return (
        <button 
            className={`bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition ${className}`} 
        >
            {text}
        </button>
    )
}

export default Button