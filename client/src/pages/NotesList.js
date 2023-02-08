import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import {getAll} from '../api'
import AddButton from '../components/AddButton';

const NotesList = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {getAll().then((data) => setNotes(data))}, [])

  const showElements = (note) => {
    let title = note.body.split('\n')[0]
    if(title.length > 45){
      title = title.slice(0,45)
    }
    const subtitle = `${new Date(note.updated).toLocaleDateString()}: ${note.body.slice(title.length)}`
    return (<><h3>{title}</h3><p><span>{subtitle}</span></p></>)
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
            {/* {(showElements(note))} */}
            <h3 key={index}>{(showElements(note))}</h3>
          </div>
        </Link>
        ))}
      </div>
      <AddButton />
    </div>
  )
}

export default NotesList