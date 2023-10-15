import React from 'react'
import BootstrapTable  from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import { useSelector,useDispatch } from 'react-redux'
import { deleteUser } from '../store/reducers/user'

const Table = () => {
  const dispatch = useDispatch()
  const {userData} = useSelector((state) => state.user);

  const handleDeleteId = (id) => {
    dispatch(deleteUser(id))
  }

  console.log(userData);
  return (
    <div>
         <BootstrapTable responsive="sm" className='mt-5'>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
            {userData.map(({id,name,email,status}) => (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{email}</td>
                    <td>{status}</td>
                    <td><Button variant='info'>Edit</Button></td>
                    <td><Button variant='danger' onClick={() => handleDeleteId(id)}>Delete</Button></td>
                </tr>
            ))}
        </tbody>
      </BootstrapTable>
    </div>
  )
}

export default Table