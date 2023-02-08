import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getAll} from '../api'
import AddButton from '../components/AddButton';

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getAll().then((data) => setNotes(data))}, [])

  const getTitle = (note) => {
    // const title = note
    const title = note.body.split('\n')[0]
    if(title.length > 45){
      return title.slice(0,45)
    }
    return title
  }
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
            {(getTitle(note))}
            <h3 key={index}>{note.body}</h3>
          </div>
        </Link>
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesList