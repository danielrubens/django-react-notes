import React, {useState, useEffect} from 'react'
import getNotes from '../api'

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getNotes().then((data) => setNotes(data))}, [])

  const showElements = (note) => {
    const keys = Object.keys(note)
    return(
      <>
      {keys.map((el, index) => (<p key={`${index}-${el}-${keys[index]}`}>{note[keys[index]]}</p>))}
      </>
    )
  }

  return (
    <div>{notes.map((note, index) => (<p key={index}>{showElements(note)}</p>))}</div>
  )
}

export default NotesList