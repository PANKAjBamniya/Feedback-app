import React,{useEffect, useState} from 'react'

const Form = ({addfeedback ,edit ,updatedFeedback}) => {
  
  const [review , setReview] = useState('')
  const [rating , setRating] = useState()
  
  const handleSubmit  = ((e) => {
    e.preventDefault()

    edit.isedit 
    ? updatedFeedback({id:edit.feedback.id, review : review, rating : parseInt(rating)}) 
    : addfeedback(rating,review);  

    setRating("")
    setReview("")
  })

  useEffect(() => {
    setRating(edit.feedback.rating)
    setReview(edit.feedback.review) 
  },[edit])

 
  return (
    <form
    onSubmit={handleSubmit}
     className='bg-zinc-200 w-[90vw] p-10 mt-2 dark:bg-gray-800 space-y-1 rounded-sm'>
      <select 
      value={rating}
      onChange={((e) =>{
        setRating(e.target.value)
      })}
      required
       className='w-full py-2 px-2 outline-none'>
        <option value="">Select </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
        <textarea 
        value={review}
        onChange={((e) =>{
          setReview(e.target.value)
        })}
        required
        type="text" placeholder='...' className='py-2 w-full rounded-sm px-2 outline-none'/>
        <button 
         className='py-2 w-full rounded-sm bg-emerald-700 hover:bg-emerald-500 mt-2 text-white outline-none '>
          {edit.isedit ? "Updated" : "Add"}
          </button>       
     </form>
  )
}

export default Form