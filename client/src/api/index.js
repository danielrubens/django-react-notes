import axios from 'axios'

const API = axios.create({baseURL: 'api/' })

const getNotes = async () => {
   try{
   const response = await API.get('notes/')
   return response.data
   }catch(error){
    console.log(error.stack)
   }
}

export default getNotes