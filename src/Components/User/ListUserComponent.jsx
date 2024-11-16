import React, { useEffect, useState } from 'react'
import { ListUsers } from '../../Services/UserService'

const ListUserComponent = () => {

    const [user, setUsers] = useState([])

    useEffect(()=>{
        ListUsers().then((response)=>{
            setUsers(response.data)
        }).catch(error => {
            console.error(error)
        })
    }, [])

    return (
        <div className='container'>
            <h2 className='text-center'>Lista de Usuarios</h2>

            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map(usuario =>
                        <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombres}</td>
                            <td>{usuario.apellidos}</td>
                            <td>{usuario.email}</td>

                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default ListUserComponent