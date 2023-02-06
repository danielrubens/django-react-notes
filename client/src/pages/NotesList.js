import React, {useState, useEffect} from 'react'

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {}, [])

  const getNotes = async () => {
    fetch('http://127.0.0.1:8000/notes/').then((res) => res.json()).then((data) => setNotes(data))
  }

  return (
    <div>{notes.map((i) => (<p>{console.log(i)}</p>))}</div>
  )
}

export default NotesList