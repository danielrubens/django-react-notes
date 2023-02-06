import axios from 'axios'

const API = axios.create({baseURL: 'http://127.0.0.1:8000/api/' })

const getNotes = async () => {
   try{
   const response = await API.get('notes/')
   return response.data
   }catch(error){
    console.log(error.stack)
   }
}

export default getNotes