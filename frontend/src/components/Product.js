import React from 'react'
import { Card } from 'react-bootstrap'
import '../index.css'
import Rating from './Rating'
import { Link } from 'react-router-dom'

function Product({ product }) {
    return (
<<<<<<< HEAD
        <Card className='my-3 pk-card hover-lift h-100'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
            </Link>

            <Card.Body className="d-flex flex-column">
=======
        <Card className='my-3 rounded'>
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} />
            </Link>

            <Card.Body>
>>>>>>> cf8767a (added new features & refactored code)
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

<<<<<<< HEAD
                <Card.Text as='h4' className="mt-auto pt-3 text-gradient fw-bold">
=======
                <Card.Text as='h4'>
>>>>>>> cf8767a (added new features & refactored code)
                    ${product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Product