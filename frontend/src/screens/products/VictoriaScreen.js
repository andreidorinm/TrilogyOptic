import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../../components/Product'
import Message from '../../components/Message'
import Loader from '../../components/Loader'
import PaginateVictoria from '../../components/Paginate/PaginateVictoria'
import { Image } from 'react-bootstrap'
import Meta from '../../components/Meta'
import { listVictoriaProducts } from '../../actions/productActions'
import victoria from '../pictures/victoria.jpg'

const VictoriaScreen = ({ match }) => {
  const keyword = match.params.keyword
  const historyback = useHistory()

  const pageNumber = match.params.pageNumber || 1

  const dispatch = useDispatch()

  const productVictoria = useSelector((state) => state.productVictoria)
  const { loading, error, products, page, pages } = productVictoria

  useEffect(() => {
    dispatch(listVictoriaProducts(keyword, pageNumber))
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
            <Image src={victoria} fluid />
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
          <PaginateVictoria
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ''}
          />
        </>
       )} 
      </>
  )}

export default VictoriaScreen