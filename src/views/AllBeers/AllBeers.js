import React from 'react'
import { useState, useEffect } from 'react';
import CardBeer from '../../UI/CardBeer/CardBeer';
import Form from 'react-bootstrap/Form';

function AllBeers() {

  const [beers, setBeers] = useState([]);

  const[search,setSearch] = useState('')

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
        <div className="row d-flex justify-content-between my-3">
          <div className="col-12 col-md-9">
          <h4>Stai 👀 cercando  ➡️ {search == '' ? '': `${search}...`}</h4>
          </div>
            <div className="col-12 col-md-3">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search beer..."
                            className="me-2"
                            aria-label="Search"
                            onChange={(e) => setSearch(e.target.value)}
                            
                        />
                        
                    </Form>
                </div>
            </div>
      </section>

      <section className="container">
        <div className="row">

          {
            beers && beers.filter((beer) => {
              return search.toLowerCase() === ''
              ? beer
              : beer.name.toLowerCase().includes(search)
            }).map((beer) => {

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