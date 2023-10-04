import React, {useState} from 'react'
import { Notification } from './Notification'

export const PersonForm = ({onSubmitValue, newName, onChagePhone, onChangeInput, newNumber, errorMessasge, validMessage}) => {


    

  return (
    <>
         <form onSubmit={onSubmitValue}>
         <h1 className='text-xl font-semibold mb-2'>Añadir nuevo contacto</h1>
        <div>
          Nombre:{" "}
          <input
            value={newName}
            onChange={onChangeInput}
            className="bg-zinc-600 text-white"
          />
        </div>
        <div className="mt-2">
          Número:{" "}
          <input
            value={newNumber}
            onChange={onChagePhone}
            className="bg-zinc-600 text-white"
          />
        </div>
      <Notification message={errorMessasge} />
      <Notification message={validMessage} />

        <div>
          <button
            className="w-full mt-2 bg-blue-600 px-2 py-1 text-white rounded-md"
            type="submit"
          >
            add
          </button>
        </div>
      </form>
    </>
  )
}
