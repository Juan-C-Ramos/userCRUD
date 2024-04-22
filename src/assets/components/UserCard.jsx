import React, { useState } from 'react'
import UserForm from './UserForm'
import "./UserCard.css"

const UserCard = ({user, deleteUser, patchUser}) => {
  const [showEdit, setshowEdit] = useState(false)


  const handleButtonEdit = () => {
    setshowEdit(!showEdit)
  }

  const handleButtonDelete = () => {
    deleteUser("users", user.id)
    alert(`Se ha borrado el usuario ${user.first_name} ${user.last_name}`)
  }
  return (
    <div className='user__card'>
      {
        showEdit?
    <UserForm
    createUser = {patchUser}
    close = {setshowEdit}
    edit = {user}>
    </UserForm>
    :null
      }
      <div>
        <h2>{user.first_name} {user.last_name}</h2>
      </div>
      <ul>
        <li><span>Correo</span></li>
        <li><span>{user.email}</span></li>
      </ul>
      <ul>
        <li><span> 🗓️Cumpleaños</span></li>
        <li><span>{user.birthday}</span></li>
      </ul>

      <div className='button__card'>
        <button className='button__delete' onClick={handleButtonDelete}>Delete</button>
        <button className='button__edit' onClick={handleButtonEdit}>Edit</button>
      </div>
    </div>
  )
}

export default UserCard