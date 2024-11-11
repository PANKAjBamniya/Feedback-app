import React,{useState,useEffect} from 'react';
import ListGroup from './ListGroup';

const Hero = () => {
  const [feedbacks, setfeedbacks] = useState([])
  const [text, setText] = useState("")
  const [rate, setRate] = useState("")
  const [edit,setEdit] = useState ({
    feedback :{},
    isedit : false
  })

  const handleDelete = (id) => {
      setfeedbacks(feedbacks.filter((item) => item.id !== id))
  };

  const handleAddButton = ((e,rate,text) => {
      e.preventDefault();
      const newRate = {
        id:Date.now(),
        Rateing: parseInt(rate),
        feedback: text
      }
      setfeedbacks([...feedbacks, newRate])
      setRate("")
      setText("")
      // console.log(newRate)
    }); 

    const handleEdit = ((feedback) => {
      setEdit({
        feedback:feedback,
        isedit:true
      })
    }) 
    useEffect(() => {
      setRate(edit.feedback.Rateing)
      setText(edit.feedback.feedback)
    }, [edit]);
    
    const handleUpdate = ((updatefeedback) => {
      console.log(updatefeedback)
    })
  return (
    <div className="">
     <form
     onSubmit={(e) => {
      handleAddButton(e,rate,text)
     }}
     className='bg-zinc-200 w-[90vw] p-10 mt-2 dark:bg-gray-800 space-y-1 rounded-sm'>
      <select 
      required
      value={rate}
      onChange={(e) => {

        {edit.isedit ? updatefeedback({id:edit.feedback.id,rateing :Rateing })  : setRate(e.target.value)}
 
      }}
       className='w-full py-2 px-4 outline-none'>
        <option value="">Select feedbacks</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
        <textarea 
        required
        value={text}
        onChange={(e) => {
          setText(e.target.value)
        }}
        type="text" placeholder='...' className='py-2 w-full rounded-sm px-2 outline-none'/>
        <button 
         className='py-2 w-full rounded-sm bg-emerald-700 hover:bg-emerald-500 mt-2 text-white outline-none '>
          {edit.isedit ? 'Update' : 'Add'}
          </button>       
     </form>
     <div className=' w-[90vw] mt-2 rounded-sm'>
      <ListGroup handleDelete={handleDelete} feedbacks={feedbacks} handleEdit={handleEdit}/>
     </div>
    </div>
  );
};

export default Hero;
