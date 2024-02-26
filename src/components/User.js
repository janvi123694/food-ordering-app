import React, { useState } from 'react'

const User = () => {
    const [count, setCount] = useState(0); 
    const incrCount = () => {
        setCount((count) => count + 1); 
    }
  return (
    <div className='user-card text-center'>
      <h2>Janhavi</h2>
      <h2>Buffalo</h2>
        <h2>tsaij@gmail.com</h2>
        <h2>FC count : {count}</h2>
        <button className="bg-blue-600 px-5 py-2 rounded-lg text-white" onClick={incrCount}> click</button>
    </div>
  )
}

export default User
