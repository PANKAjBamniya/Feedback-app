import React from 'react'
import ListItems from './ListItems'

const ListGroup = ({feedbacks,removefeedback}) => {

  return (
    <ul className='space-y-2 '>
        {
          feedbacks.map((feedback) => 
            <ListItems key={feedback.id} feedback={feedback} removefeedback={removefeedback}/>
          )
        }
    </ul>
  )
}

export default ListGroup