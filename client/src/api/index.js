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
      return response
      }catch(error){
       console.log(error.stack)
      }
}

export { getAll, getById }