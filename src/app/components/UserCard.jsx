import React from 'react'

const UserCard = ({data}) => {

  const {first, last, title} = data.name
  return (
    <div className='flex gap-2 items-center mx-1 border p-1 rounded-lg my-2 sm:w-1/3 w-full'>
        <img src={data.picture.thumbnail} alt="picture" className=' rounded-full w-7 h-7'></img>
        <div className='my-2'>{title}. {first} <span>{last}</span></div>
    </div>
  )
}

export default UserCard