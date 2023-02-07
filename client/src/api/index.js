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

// const update = async (id, note) => {
//       try{
//          const response = await API.put(`notes/${id}/update/`, {body: JSON.stringify(note)})
//          console.log(response.data)
//          const retrieved = JSON.parse(response.data)
//          console.log(retrieved)
//          console.log(JSON.parse(retrieved.body))
//          return retrieved
//          }catch(error){
//           console.log(error.stack)
//          }
//       }

   const update = async (id, note) => {
      fetch(`http://localhost:8000/api/notes/${id}/update/`,{
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json'
         },
         body: JSON.stringify(note)
      }
      )
      }

export { getAll, getById, update }