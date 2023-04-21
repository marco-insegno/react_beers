import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

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

  console.log(beer);
  return (

    <>
      <section className="container my-5 py-5">
        <div className="row">
          {beer &&
            <>
              <div className="col-12 col-md-6 border d-flex justify-content-center my-3 my-md-0">
                <img src={beer.image_url} alt={beer.name} />
              </div>
              <div className="col-12 col-md-6 border my-3 my-md-0 position-relative">
                <h1 className='mb-5'>{beer.name}</h1>
                <h5 className='mb-5'>{beer.description}</h5>
                <h6 className='position-absolute top-0 end-0 mt-3'>Since: {beer.first_brewed}</h6>

                <h4>Ingredients:</h4>

                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                  <Row className="my-3">
                    <Col sm={4}>
                      <ListGroup classname="mb-3 ">

                        <ListGroup.Item action href="#hops">
                          Hops
                        </ListGroup.Item>

                        <ListGroup.Item action href="#malts">
                          Malts
                        </ListGroup.Item>

                      </ListGroup>
                    </Col>
                    <Col sm={9}>
                      <Tab.Content className="mt-4 border p-3">
                        <Tab.Pane eventKey="#hops">

                          {
                            beer.ingredients.hops.map((ingredient, index) => {
                              return (
                                <h5 key={index}>{ingredient.name}</h5>
                              )
                            })
                          }


                        </Tab.Pane>
                        <Tab.Pane eventKey="#malts">
                          {
                            beer.ingredients.malt.map((ingredient, index) => {
                              return (
                                <h5 key={index}>{ingredient.name}</h5>
                              )
                            })
                          }
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>

                <h4 className='mt-4'>Fermentation:</h4>

                <p>{beer.method.fermentation.temp.value}°{beer.method.fermentation.temp.unit}</p>

                <h4 className='mt-4'>Mash Temperature:</h4>

                {beer.method.mash_temp && beer.method.mash_temp.map((el, index) => {

                  return (

                    <p key={index}>duration: {el.duration} min || temperature: {el.temp.value}°{el.temp.unit}</p>

                  )

                })}

                <h4 className='mt-4'>Twist:</h4>

                <p>{beer.method.twist}</p>

              </div>
            </>
          }

        </div>
      </section>
    </>


  )
}

export default ShowBeer