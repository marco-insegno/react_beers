import React from 'react'
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import './BeerBoxDetails.css';

function BeerBoxDetails(props) {

    const beer = props.beer;


    return (
        <div className="col-12 col-md-6 my-3 my-md-0 position-relative py-5 px-4">
            <h1 className='mb-5'>{beer.name}</h1>
            <h5 className='mb-5'>{beer.description}</h5>
            <h6 className='position-absolute top-0 end-0 mt-3'>Since: {beer.first_brewed}</h6>

            <h4>Ingredients:</h4>

            <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                <Row className="my-3">
                    <Col sm={4} md={6} lg={4}>
                        <ListGroup className="mb-3 list-group-custom">

                            <ListGroup.Item action href="#hops">
                                Hops
                            </ListGroup.Item>

                            <ListGroup.Item action href="#malts">
                                Malts
                            </ListGroup.Item>

                        </ListGroup>
                    </Col>
                    <Col sm={8} md={6} lg={8}>
                        <Tab.Content >
                            <Tab.Pane eventKey="#hops" >
                                <div className='box-ingredients position-relative'>

                                    <ul>
                                        {
                                            beer.ingredients.hops.map((ingredient, index) => {
                                                return (

                                                    <li key={index}>
                                                        <h5>{ingredient.name}</h5>
                                                    </li>

                                                )
                                            })
                                        }
                                    </ul>
                                </div>

                            </Tab.Pane>
                            <Tab.Pane eventKey="#malts">
                                <div className='box-ingredients'>
                                    <ul>
                                        {
                                            beer.ingredients.malt.map((ingredient, index) => {
                                                return (

                                                    <li key={index}>
                                                        <h5>{ingredient.name}</h5>
                                                    </li>

                                                )
                                            })
                                        }
                                    </ul>
                                </div>
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

            {beer.method.twist &&


                <h4 className='mt-4'>Twist:</h4>}


            <p>{beer.method.twist}</p>

            <h4 className='mt-4'>Food Pairing:</h4>

            {
                beer.food_pairing && beer.food_pairing.map((food, index) => {
                    return(
                        <p key={index}>- {food}</p>
                    )
                })
            }

            <div className="box-price">
                <h1 className='mb-0 display-2'>{beer.ebc ? beer.ebc : '10'} €</h1>
            </div>


        </div>
    )
}

export default BeerBoxDetails