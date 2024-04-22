import React from 'react'
import { useForm } from 'react-hook-form'
import "./UserForm.css"


const UserForm = ({createUser, close, edit}) => {
    const {handleSubmit, register, reset} = useForm()

    edit?
    reset({
        first_name: edit.first_name,
        last_name: edit.last_name,
        email: edit.email,
        password: edit.password,
        birthday: edit.birthday,
    })
    :null
    
    const submit = data => {
        edit?
        createUser("users", data, edit.id)
        :
        createUser("users", data)

        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
        })
        close(false)
    }

  return (
    // email, password, first_name last_name, birthday
    <div className='form__bg'>
        <div className='form__card'>
            
        <button className='close' onClick={() => close(false)}>X</button>
        <form onSubmit={handleSubmit(submit)}>
            
                <label htmlFor='first_name'>Nombre</label>
                <input {...register("first_name")} type="text" id='first_name' placeholder="Nombre" />
            
            
                <label htmlFor='last_name'>Apellido</label>
                <input {...register("last_name")}type="text" id='last_name' placeholder="Apellido" />
            
            
                <label htmlFor='email'>email</label>
                <input {...register("email")} type="text" id='email' placeholder="Email" />
            
            
                <label htmlFor='password'>Password</label>
                <input {...register("password")} type="password" id='password' placeholder="Pasword" />
           
                <label htmlFor='birthday'>birthday</label>
                <input {...register("birthday")} type="date" id='birthday' placeholder="Birthday" />
            
            <button>✍️Enviar</button>
        </form>
        </div>
        <div>

        </div>
    </div>
  )
}

export default UserForm