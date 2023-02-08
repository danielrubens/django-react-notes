import axios from 'axios'

const API = axios.create({baseURL: 'http://127.0.0.1:8000/api/' })

const create = async (note) => {
   try{
   const response = await API.post('notes/create/', {body: note})
   console.log(response)
   // return response.data
   }catch(error){
      console.log(error.stack)
      }
   }

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

export { create, getAll, getById, update, remove }