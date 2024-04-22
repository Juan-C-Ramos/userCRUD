import { useEffect, useState } from 'react'
import './App.css'
import useCrud from './assets/hooks/useCrud.js'
import UserForm from "./assets/components/UserForm.jsx"
import UserCard from './assets/components/UserCard.jsx'


function App() {
  const urlBase = "https://users-crud.academlo.tech/"
  const [users, getUser, createUser, deleteUser, patchUser, isError, isLoading, isComplete] = useCrud(urlBase)
  const [showFormCreate, setShowFormCreate] = useState(false)


  useEffect(() => {
    isComplete? alert("Successfully"):null
  }, [isComplete])

  useEffect(() => {
    const path="users"
    getUser(path)
  }, [])
  const handleButtonCreate = () =>{
    setShowFormCreate(!showFormCreate)
  }

  

  return (
    <div id='app' className='app'>
    <header className='header'>
    <h1>Usuarios</h1>
    <button onClick={handleButtonCreate}> <span className='plus'>+ </span> Agregar Nuevo Usuario</button>
    </header>
     {
      
        showFormCreate? 
        <UserForm 
        createUser = {createUser}
        close = {setShowFormCreate}></UserForm> 
        : null
      
     }
     <div className='content'>
     {
      users?.map((user) => (
        <UserCard
        key={user.id}
        user={user}
        deleteUser={deleteUser}
        patchUser={patchUser}></UserCard>
     ))

     }    

     </div>
    </div>
  )
}

export default App
