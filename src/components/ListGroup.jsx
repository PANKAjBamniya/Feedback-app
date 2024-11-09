import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({rating , handleDelete}) => {

  return (
    <ul className='space-y-2 '>
        { 
            rating.map((items) => {
                return(
                    <ListItems key={items.id} items={items} handleDelete={handleDelete} />
                )
            })
        }
    </ul>
  )
}

export default ListGroup