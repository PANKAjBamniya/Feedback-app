import React,{useState} from 'react';
import ListGroup from './ListGroup';
import Form from './Form';

const Hero = () => {
  const [feedbacks, setFeedbacks] = useState([])
  const [edit , setEdit] = useState({
    feedback:{},
    isedit:false,
  })

  const editfeedback = ((feedback) => {
    setEdit({
      feedback:feedback,
      isedit:true,
    })
    // console.log(feedback)
  })

  const addfeedback =  ((rating,review) => {
    const newfeedback = {
      id: Date.now(),
      rating: parseInt(rating),
      review:review,
    }
    setFeedbacks([...feedbacks, newfeedback])

  })

  const removefeedback = ((id) => {
    setFeedbacks(feedbacks.filter((feedback) => feedback.id !== id))
  })

  const updatedFeedback = ( (updatedFeedback) => {

    setFeedbacks(feedbacks.map((feedback) => 
    feedback.id === updatedFeedback.id ? updatedFeedback : feedback 
    
    ))
    setEdit({feedback:{} ,isedit :false});  
  })
  return (
    <div className="">
     <Form addfeedback={addfeedback} edit={edit} updatedFeedback={updatedFeedback}/>
     <div className=' w-[90vw] mt-2 rounded-sm'>
      <ListGroup feedbacks={feedbacks} removefeedback={removefeedback} editfeedback={editfeedback}/>
     </div>
    </div>
  );
};

export default Hero;
