import React from 'react'
import AddReview from './AddReview'

const Reviews = () => {
    // const allReviews=[
    //     {"id":1, "review":"awesome", "rating":"5", "reviewed_by":2}
    // ]
  return (
    <div className='d-flex justify-content-between'>
        {/* <div>{allReviews}</div> */}
        <AddReview/>
    </div>
  )
}

export default Reviews