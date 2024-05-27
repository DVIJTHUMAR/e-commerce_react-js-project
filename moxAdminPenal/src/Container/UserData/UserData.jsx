import React from 'react'
import Header from '../../Component/Header/Header'
import { Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'

function UserData() {


  const { user } = useSelector(state => state.adminReducer);

  console.log("user",user);

  return (
    <div>
      <Header />


  <Card className='col-4 border p-2 mx-3'>
    <div className="col">
      <img src={user.profilePic} alt="img" className='img-fluid'/>
    </div>
    <div className="col">
      <h2>
        Name :{user.name}<br/>
      </h2>
      <p>Email: {user.email}</p><br/>
    </div>
  </Card>
      
    </div>
  )
}

export default UserData
