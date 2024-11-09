import React from 'react'

const ListItems = ({items,handleDelete}) => {
  // console.log(items)
    
  return (
    <li className='dark:text-white flex items-center justify-between bg-gray-300 dark:bg-gray-800 py-2 px-6 rounded-sm'>
        <div className='space-y-2'>
            <h1 className='text-2xl font-bold'>
                Rating : {items.Rateing}
            </h1>
            <p className='text-xl'>Review : {items.feedback}</p>
        </div>
        <div className='space-x-2'>
          <button className='py-1 px-4 bg-yellow-600 rounded-sm text-white'>Edit</button>
          <button
          onClick={() => {
            handleDelete(items.id)
          }}
          className='py-1 px-4 bg-red-600 rounded-sm text-white'>Delete</button>
        </div>
    </li>
  )
}

export default ListItems