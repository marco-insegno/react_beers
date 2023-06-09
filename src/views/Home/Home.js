import React from 'react'
import { useState, useEffect } from 'react';
import CardBeer from '../../UI/CardBeer/CardBeer';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';





function Home() {

    const [beers, setBeers] = useState([])

    useEffect(() => {

        fetch('https://api.punkapi.com/v2/beers/')
            .then((response) => response.json())
            .then(data => setBeers(data))

    }, [])


    return (
        <section className="container my-5 ">
            <div className="row">
                <div className="col-12">
                    <h1>Last 6 Beers...</h1>
                </div>
            </div>
            <div className="row mt-5 justify-content-center">

                {beers && beers.slice(0, 6).map((beer) => {

                    return (

                        <CardBeer beer={beer} key={beer.id} />

                    )
                })}
            </div>

            <div className="row justify-content-center mt-5">
                <div className="col-12 col-md-4">

                    <Link to="/all-beers">
                        <Button className='btn-custom w-100 p-5 fs-2'>All Beers...</Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Home