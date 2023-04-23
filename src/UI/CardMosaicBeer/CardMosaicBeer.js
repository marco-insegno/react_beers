import React from 'react'
import './CardMosaicBeer.css'
import { Link } from 'react-router-dom';

function CardMosaicBeer(props) {

    const beer = props.beer;

    return (

        <div
            key={beer.id}
            className="col-6 col-sm-4 col-md-2 px-0 box-beer position-relative"
            style={{ border: '1px solid var(--color-orange)' }}
        >
            <Link to={`/beer/${beer.id}`}>
                <div 
                    style={{
                        backgroundImage: `url(${beer.image_url})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '150px',
                        backgroundPosition: 'bottom',
                        height: '300px',
                        
                    }}>

                    <div className='d-flex flex-column align-items-center text-center box-description h-100 py-4'>
                        <h5 className="py-3">{beer.name}</h5>
                        <p className='text-center'>"{beer.tagline.replace('.', '')}"</p>
                        <p className='fst-italic'>
                            <small>Since: {beer.first_brewed}</small>
                        </p>

                        <p className='position-absolute top-0 end-0 mb-0'>{beer.abv}°</p>
                        <p className='position-absolute bottom-0 end-0 mb-0 fs-4 me-1'>{beer.ebc ? beer.ebc : '10'} €</p>
                    </div>

                </div>
            </Link>
        </div>

    )
}

export default CardMosaicBeer