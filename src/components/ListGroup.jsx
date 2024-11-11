import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({feedbacks , handleDelete, handleEdit}) => {

  return (
    <ul className='space-y-2 '>
        { 
            feedbacks.map((feedback) => {
                return(
                    <ListItems key={feedback.id} feedback={feedback} handleDelete={handleDelete} handleEdit={handleEdit}/>
                )
            })
        }
    </ul>
  )
}

export default ListGroup