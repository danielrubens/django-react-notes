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

  const updateNote = async () => {
    if (params.id === 'new' && !note.body) deleteNote(params.id)
    else if(params.id !== 'new'){
      const response = await update(params.id, note)
      setNote(response)
      history.push('/')
    }
  }

  const deleteNote = async() => {
    await remove(params.id)
    history.push('/')
  }

  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <ArrowLeft onClick={updateNote}/>
          </h3>
          {params.id !== 'new' ? 
            (<button onClick={deleteNote}>Delete</button>) : (<button>Done</button>)
          }
        </div>
        {params.id !== 'new' ? 
        (<textarea onChange={({target}) => setNote(target.value)} defaultValue={note.body}>{note.body}</textarea>)
        :(<textarea onChange={({target}) => setNote(target.value)}>{note}</textarea>)
          }
          {/* <textarea onChange={({target}) => setNote(target.value)} defaultValue={note.body}>{note.body}</textarea> */}
    </div>
  )
}

export default NotePage