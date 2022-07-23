import React from 'react'
import StarRatings from 'react-star-ratings'

const AddReview = () => {
  return (
    <div>
      <form>
        <textarea wrap="soft" spellCheck="true"></textarea>
        <StarRatings/>
      </form>
    </div>
  )
}

export default AddReview