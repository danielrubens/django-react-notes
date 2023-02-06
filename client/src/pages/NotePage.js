import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import {getById} from '../api'

const NotePage = () => {
  const [note, setNote] = useState('')
  const params = useParams()
  useEffect(() => {getById(params.id).then((data) => setNote(data))}, [params.id])
  console.log(note)
  return (
    <div>
        <h1>Single Note</h1>
    </div>
  )
}

export default NotePage