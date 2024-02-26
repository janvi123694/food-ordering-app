import React from 'react'

const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-lg p-2 m-2"> Contact </h2>
      <form action="">
        <input type="text" placeholder='name' className='border border-black p-2 m-2'/>
        <input type="text" placeholder='message'  className='border border-black p-2 m-2'/>
        <button className="bg-green-500 px-3 py-1 m-2 text-white rounded-lg">Submit </button>
      </form>
    </div>
  )
}

export default Contact
