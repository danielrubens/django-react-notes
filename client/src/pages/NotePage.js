import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getById} from '../api'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
import { Link } from 'react-router-dom'


const NotePage = () => {
  const [note, setNote] = useState('')
  const params = useParams()

  useEffect(() => {getById(params.id).then((data) => setNote(data))}, [params.id])

  return (
    <div className="note">
        <div className="note-header">
          <h3>
            <Link to="/">
              <ArrowLeft />
            </Link>
          </h3>
        </div>
        <textarea defaultValue={note.body}>{note.body}</textarea>
    </div>
  )
}

export default NotePage