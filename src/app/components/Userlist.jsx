import React from 'react'
import UserCard from './UserCard'

const Userlist = ({userData}) => {
    console.log(userData);
  return (
    <div>
        {userData.map((data, index) => (<UserCard data={data} key={index}/>))}
    </div>
  )
}

export default Userlist