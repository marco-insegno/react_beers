import React from 'react'
import CardBeer from '../CardBeer/CardBeer.js'
import './RelatedBeers.css'

function RelatedBeers(props) {

  const mainBeer = props.beer;

  const beerAbv = props.beer.abv;

  const allBeers = props.beers;

  const relBeers = [];

  (allBeers && allBeers.map((beer) => {

    if (beer.abv === beerAbv) {

      relBeers.push(beer);
    }
  }
  ))


  {
    if (relBeers.length > 1) {

      return (


        <section className="container">
          <div className="row">
            <div className="col-12">
              <h2>Others Beers with ABV {beerAbv}°...</h2>
            </div>
          </div>

          <div className="row mt-4">

            {relBeers && relBeers.map((beer) => {
              if (mainBeer.id !== beer.id) {

                return (

                  <CardBeer key={beer.id} beer={beer} />

                )
              }

            })}

          </div>
        </section>

      )

    } else {

      return (

        <section className="container my-5 pt-5 adv">
          <div className="row">
            <div className="col-12">
              <h3 className='m-0'>There are no other beers with this alcohol content</h3>
            </div>
          </div>
        </section>



      )
    }
  }

  // (relBeers && relBeers.map((beer) => {

  //   if (mainBeer.abv === beer.abv ){

  //     // console.log('uguale');

  //     return (


  //     <section className="container">
  //       <div className="row">
  //         <div className="col-12">
  //           <h2>Others Beers with ABV {beerAbv}°...</h2>
  //         </div>
  //       </div>

  //       <div className="row mt-4">

  //         {relBeers && relBeers.map((beer) => 

  //         {
  //           if(mainBeer.id !== beer.id){

  //             return (

  //               <CardBeer key={beer.id} beer={beer}/>

  //           )
  //           }

  //         })}

  //       </div>
  //     </section>

  // )
  //   } 
  // }))


  // return (


  //     <section className="container">
  //       <div className="row">
  //         <div className="col-12">
  //           <h2>Others Beers with ABV {beerAbv}°...</h2>
  //         </div>
  //       </div>

  //       <div className="row mt-4">

  //         {relBeers && relBeers.map((beer) => 

  //         {
  //           if(mainBeer.id !== beer.id){

  //             return (

  //               <CardBeer key={beer.id} beer={beer}/>

  //           )
  //           }

  //         })}

  //       </div>
  //     </section>

  // )
}

export default RelatedBeers