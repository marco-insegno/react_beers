import React from 'react'
import { useState } from 'react'
import CardBeer from '../CardBeer/CardBeer.js'

function RelatedBeers(props) {

  const mainBeer = props.beer;

  const beerAbv = props.beer.abv;

  const allBeers = props.beers;

  const relBeers = [];

  // const [relatedBeers, setRelatedBeers] = useState([]);

  console.log(mainBeer);
  console.log(allBeers);
  console.log(beerAbv);

  console.log();

  (allBeers && allBeers.map((beer) => {

    if (beer.abv === beerAbv) {

      relBeers.push(beer);
    }
  }
  ))

  console.log(relBeers);
  return (

      <section className="container">
        <div className="row">
          <div className="col-12">
            <h2>Others Beers with ABV {beerAbv}°...</h2>
          </div>
        </div>

        <div className="row mt-4">

          {relBeers && relBeers.map((beer) => 
          
          {
            if(mainBeer.id !== beer.id){

              return (
              
                <CardBeer key={beer.id} beer={beer}/>

            )
            }

          })}

        </div>
      </section>

  )
}

export default RelatedBeers