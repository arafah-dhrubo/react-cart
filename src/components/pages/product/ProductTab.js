import React from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Review from './Review'

const ProductTab = ({description}) => {
  return (
    <Tabs
    defaultActiveKey="description"
    id="justify-tab-example"
    className="mt-5"
    justify
  >
    <Tab className="py-5" eventKey="description" title="Description">
      <p>{description}</p>
    </Tab>
    <Tab className="py-5" eventKey="review" title="Review">
    <Review/>
    </Tab>
  </Tabs>
  )
}

export default ProductTab