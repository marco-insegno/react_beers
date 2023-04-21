import React from 'react'
import { useState, useEffect } from 'react';
import CardBeer from '../UI/CardBeer/CardBeer';

function AllBeers() {

  const [beers, setBeers] = useState([]);

  useEffect(() => {

    fetch('https://api.punkapi.com/v2/beers')
      .then((response) => response.json())
      .then(data => setBeers(data))

  }, [])


  return (

    <>
      <section className="container my-5">
        <div className="row">
          <div className="col-12">
            <h2>All Beers...</h2>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">

          {
            beers && beers.map((beer) => {

              return (

                <CardBeer beer={beer} key={beer.id} />

              )

            })
          }
        </div>
      </section>

    </>
  )
}

export default AllBeers