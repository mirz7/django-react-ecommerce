import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams, Link, useNavigate } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import Message from '../components/Message';
import '../index.css'

function CartDetailsPage() {
    const { id } = useParams()
    const [searchParams] = useSearchParams();
    const qty = Number(searchParams.get('qty'))
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    const navigate = useNavigate()

    const userLogin = useSelector(state => state.userLogin)
    const { loading, userInfo, error } = userLogin

    useEffect(() => {
        if (id) {
            dispatch(addToCart(id, qty))
        }
    }, [dispatch, id, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => {
        if (!userInfo)
            navigate('/login')  
        else
            navigate('/shipping')
    }

    return (
<<<<<<< HEAD
        <Row className="py-4">
            <h2 className="fw-bold mb-4 text-gradient">Shopping Cart</h2>
=======
        <Row>
            <h2>SHOPPING CART</h2>
>>>>>>> cf8767a (added new features & refactored code)

            <Col md={8}>
                {cartItems.length === 0 ? (
                    <>
                        <Message variant='info'>
                            <strong>Your cart is empty!</strong>
                        </Message>
                        <Link to='/' className='btn btn-primary'>Go Back</Link>
                    </>
                ) : (
<<<<<<< HEAD
                    <ListGroup variant='flush' className="pk-card mb-4">
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product} className="py-3 border-bottom">
                                <Row className="align-items-center">
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded className="shadow-sm" style={{height: '80px', objectFit: 'cover'}} />
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`} className="fw-bold text-dark text-decoration-none">
                                            {item.name}
                                        </Link>
                                    </Col>

                                    <Col md={2} className="fw-bold text-gradient">
=======
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>

                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            <strong>{item.name}</strong>
                                        </Link>
                                    </Col>

                                    <Col md={2}>
>>>>>>> cf8767a (added new features & refactored code)
                                        ${item.price}
                                    </Col>

                                    <Col md={3}>
                                        <Form.Select
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
<<<<<<< HEAD
                                            className="shadow-sm border-0"
                                            style={{ backgroundColor: 'var(--pk-bg-main)' }}
=======
>>>>>>> cf8767a (added new features & refactored code)
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map(x => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>

                                    <Col md={1}>
                                        <Button
                                            type='button'
<<<<<<< HEAD
                                            variant='light'
                                            className="text-danger shadow-sm rounded-circle"
=======
                                            variant='default'
>>>>>>> cf8767a (added new features & refactored code)
                                            onClick={() => removeFromCartHandler(item.product)}
                                        >
                                            <i className='fas fa-trash'></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>

            <Col md={4}>
<<<<<<< HEAD
                <Card className="pk-card border-0">
                    <ListGroup variant='flush'>
                        <ListGroup.Item className="bg-transparent border-0 pt-4 pb-3">
                            <h4 className="fw-bold text-muted mb-3">Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h4>
                            <h3 className="fw-bold text-gradient m-0"> ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item className="bg-transparent border-0 pt-0 pb-4">
                            <Button type='button'
                                className='w-100 btn-pk-primary shadow-sm mt-3'
=======
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Subtotal Item: ({cartItems.reduce((acc, item) => acc + item.qty, 0)})</h2>
                            <h4> Price: ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</h4>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button type='button'
                                className='w-100'
>>>>>>> cf8767a (added new features & refactored code)
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    )
}

export default CartDetailsPage