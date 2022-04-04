import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import PaginateArmani from '../../components/Paginate/PaginateArmani'
import { Image } from 'react-bootstrap'
import Meta from '../../components/Meta'
import { listArmaniProducts } from '../../actions/productActions'
import armani from '../pictures/armani.jpg'

const ArmaniScreen = ({ match }) => {
  const keyword = match.params.keyword
  const historyback= useHistory()

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productArmani = useSelector((state) => state.productArmani)
  const { loading, error, products, page, pages } = productArmani

  useEffect(() => {
    dispatch(listArmaniProducts(keyword, pageNumber))
  }, [dispatch, keyword, pageNumber])

  return (
    <>
      <Meta />
      <Link  className='btn btn-light my-3' onClick={() => historyback.goBack()}>
          Înapoi
        </Link>
        
                <h2 style={{
            textAlign: "center",
            maxWidth: "500px",
            margin: "0 auto",
            padding: "10px",
            marginTop: "-5px",
            marginBottom: "10px"
          }}>
            <Image src={armani} fluid />
            </h2>

      <h1>Ultimele produse</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col> 
            ))}
           
          </Row>
          <PaginateArmani
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
       )} 
      </>
  )}

export default ArmaniScreen