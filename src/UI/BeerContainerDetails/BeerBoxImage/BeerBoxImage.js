import React from 'react'
import './BeerBoxImage.css'

function BeerBoxImage(props) {

  return (
    <div className="col-12 col-md-6 my-3 my-md-0 box-image">
      <img src={props.beer.image_url} alt={props.beer.name} className='p-5 img-fluid'/>
    </div>
  )
}

export default BeerBoxImage