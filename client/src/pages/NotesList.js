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