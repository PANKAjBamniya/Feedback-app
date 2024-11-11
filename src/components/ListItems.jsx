import React from 'react'

const ListItems = ({feedback,handleDelete, handleEdit}) => {
  // console.log(items)
    
  return (
    <li className='dark:text-white flex items-center justify-between bg-gray-300 dark:bg-gray-800 py-2 px-6 rounded-sm'>
        <div className='space-y-2'>
            <h1 className='text-2xl font-bold'>
                Rating : {feedback.Rateing}
            </h1>
            <p className='text-xl'>Review : {feedback.feedback}</p>
        </div>
        <div className='space-x-2'>
          <button 
          onClick={ () => {
            handleEdit(feedback)
          }}
          className='py-1 px-4 bg-yellow-600 rounded-sm text-white'>Edit</button>
          <button
          onClick={() => {
            handleDelete(feedback.id)
          }}
          className='py-1 px-4 bg-red-600 rounded-sm text-white'>Delete</button>
        </div>
    </li>
  )
}

export default ListItems