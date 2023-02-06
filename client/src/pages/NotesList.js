import React, {useState, useEffect} from 'react'
import {getAll} from '../api'
import Header from '../components/Header';

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getAll().then((data) => setNotes(data))}, [])

  return (
    <div>
      <Header />
      <div className="notes-list">
        {notes.map((note, index) => (<h3 key={index}>{note.body}</h3>))}
      </div>
    </div>
  )
}

export default NotesList