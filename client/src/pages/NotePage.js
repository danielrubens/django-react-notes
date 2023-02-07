import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getById} from '../api'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { useHistory } from 'react-router-dom'


const NotePage = () => {
  const [note, setNote] = useState('')
  const params = useParams()
  const history = useHistory();

  useEffect(() => {getById(params.id).then((data) => setNote(data))}, [params.id])

  const updateNote = async () => {
    fetch(`http://localhost:8000/api/notes/${params.id}/update/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    }
    )
  }

  const handleSumibt = () => {
    updateNote()
    history.push('/')
  }

  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <ArrowLeft onClick={handleSumibt}/>
          </h3>
        </div>
        <textarea onChange={({target}) => setNote({...note, 'body': target.value})} defaultValue={note.body}>{note.body}</textarea>
    </div>
  )
}

export default NotePage