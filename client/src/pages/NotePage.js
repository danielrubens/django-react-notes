import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getById, update, remove } from '../api'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { useHistory } from 'react-router-dom'


const NotePage = () => {
  const [note, setNote] = useState('')
  const params = useParams()
  const history = useHistory();
  
  useEffect(() => {getById(params.id).then((data) => setNote(data))}, [params.id])
  
  const [button] = useState(() => params.id === 'new' ? 'Add' : 'Delete')
  
  const createNote = async () => {
    fetch('http://127.0.0.1:8000/api/notes/create/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  const updateNote = async () => {
    const response = await update(params.id, note)
    setNote(response)
    history.push('/')
  }

  const handleNote = async() => {
    if(params.id === 'new'){
      createNote(note)
    } else{
      await remove(params.id) 
    }
    history.push('/')
  }

  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <ArrowLeft onClick={updateNote}/>
          </h3>
          <button onClick={handleNote}>{button}</button>
        </div>
        {params.id === 'new' ? 
        (<textarea onChange={({target}) => setNote(target.value)}>{note}</textarea>)
        :(<textarea onChange={({target}) => setNote(target.value)} defaultValue={note.body}>{note}</textarea>)
        
      }
        {/* <textarea onChange={({target}) => setNote(target.value)} defaultValue={note.body}>{note}</textarea> */}
    </div>
  )
}

export default NotePage