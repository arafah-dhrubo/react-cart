import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Reviews from './Reviews'

const ProductTab = ({description}) => {
  return (
    <Tabs
    defaultActiveKey="description"
    id="justify-tab-example"
    className="mt-5"
    justify
  >
    <Tab className="py-5" eventKey="description" title="Description">
      <p className='text-justify'>{description}</p>
    </Tab>
    <Tab className="py-5" eventKey="review" title="Review">
    <Reviews/>
    </Tab>
  </Tabs>
  )
}

export default ProductTab