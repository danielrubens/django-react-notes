import React, {useState, useEffect} from 'react'

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getNotes()}, [])

  const getNotes = async () => {
    const response = await fetch('http://127.0.0.1:8000/api/notes/')
    const data = await response.json()
    setNotes(data)
    console.log(notes)
  }

  return (
    <div>{notes.map((i) => (<p>{console.log(i)}</p>))}</div>
  )
}

export default NotesList