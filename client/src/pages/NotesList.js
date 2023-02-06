import React, {useState, useEffect} from 'react'
import getNotes from '../api'

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getNotes().then((data) => setNotes(data))}, [])

  // const showElements = (note) => {
  //   const keys = Object.keys(note)
  //   return(
  //     <>
  //     {keys.map((el, index) => (<p key={`${index}-${el}-${keys[index]}`}>{note[keys[index]]}</p>))}
  //     </>
  //   )
  // }

  return (
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (<h3 key={index}>{note.body}</h3>))}
      </div>
    </div>
  )
}

export default NotesList