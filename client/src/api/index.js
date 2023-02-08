import axios from 'axios'

const API = axios.create({baseURL: 'http://127.0.0.1:8000/api/' })

const getAll = async () => {
   try{
   const response = await API.get('notes/')
   return response.data
   }catch(error){
      console.log(error.stack)
      }
   }

const getById = async (id) => {
   try{
      const response = await API.get(`notes/${id}/`)
      return response.data
      }catch(error){
      console.log(error.stack)
      }
   }

const update = async (id, note) => {
   try{
      const response = await API.put(`notes/${id}/update/`, {body: note})
      return response.data.body
      }catch(error){
         console.log(error.stack)
      }
   }

const remove = async (id) => {
   try{
      const response = await API.delete(`notes/${id}/delete/`)
      return response.data.body
      }catch(error){
         console.log(error.stack)
      }
   }

export { getAll, getById, update, remove }