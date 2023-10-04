import React from 'react'

export const Notification = ({ message }) => {
    if(message === null){
        return null
    }

    return ( 
        <div className='text-blue-700 p-3 border border-red-900 bg-gray-300 mt-3'>{message}</div>
    )
}
