import React from 'react'

const UserSearchInput = ({inputText, setInputText}) => {

    console.log(inputText);
  return (
    <div>
        <input type="text" placeholder="Search user"  className=' p-3 rounded-lg shadow-lg sm:w-1/3 w-full ' value={inputText} onChange={(e) => setInputText(e.target.value)}/>
    </div>
  )
}

export default UserSearchInput