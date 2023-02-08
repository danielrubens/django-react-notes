import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as AddICon} from '../assets/add.svg'

const AddButton = () => {
  return (
    <Link to ='/note/new' className="floating-button">
        <AddICon/>
    </Link>
  )
}

export default AddButton