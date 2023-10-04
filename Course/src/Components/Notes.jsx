import { useState } from "react"

export const Notes = () => {
    const [notes, setNotes] = useState([])
  return (
    <>
        <h1>Notas</h1>
        <ul>
            {
                notes.map(note=> (
                  note.name
                ))
            }
        </ul>
    </>
  )
}
