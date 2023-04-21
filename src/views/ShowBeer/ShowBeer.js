import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import BeerContainer from '../../UI/BeerContainerDetails/BeerContainer';
import RelatedBeers from '../../UI/RelatedBeers/RelatedBeers';

function ShowBeer() {

  const { id } = useParams()
  const [beers, setBeers] = useState([])


  useEffect(() => {

    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then(data => setBeers(data))

  }, [])

  const idNumber = Number(id);
  const beer = beers.find((beer) => beer.id === idNumber);

  return (

    <>
      <section className="container my-5 py-5">
        <div className="row">
          {beer &&

            <BeerContainer beer={beer} />

          }

        </div>

        <div className="row my-5">

          {/* related beer by gradi */}

          {beer &&

            <RelatedBeers 
              beer={beer}
              beers={beers}/>
          }
        </div>
      </section>
    </>


  )
}

export default ShowBeer