import React, {useState, useEffect} from 'react'
import {getAll} from '../api'
import { Link } from 'react-router-dom';

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getAll().then((data) => setNotes(data))}, [])

  return (
    <div className="notes">
      <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes</h2>
          <p className="notest-count">{notes.length}</p>
      </div>
      <div className="notes-list">
        {notes.map((note, index) => (
        <Link to={`/note/${note.id}`}>
          <div className="notes-list-item">
            <h3 key={index}>{note.body}</h3>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default NotesList