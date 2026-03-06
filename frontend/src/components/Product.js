import React from 'react'
import { Card } from 'react-bootstrap'
import '../index.css'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
        <Card className='my-3 pk-card hover-lift h-100'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            </Link>

            <Card.Body className="d-flex flex-column">
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as='div'>
                    <div className='my-2'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                    </div>
                </Card.Text>

                <Card.Text as='h4' className="mt-auto pt-3 text-gradient fw-bold">
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product