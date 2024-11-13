import React,{useState} from 'react';
import ListGroup from './ListGroup';
import Form from './Form';

const Hero = () => {
  const [feedbacks, setFeedbacks] = useState([])

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

  return (
    <div className="">
     <Form addfeedback={addfeedback}/>
     <div className=' w-[90vw] mt-2 rounded-sm'>
      <ListGroup feedbacks={feedbacks} removefeedback={removefeedback}/>
     </div>
    </div>
  );
};

export default Hero;
