import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Paginate from '../components/Paginate'
import ProductCarousel from '../components/ProductCarousel'
import Meta from '../components/Meta'
import { listProducts } from '../actions/productActions'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import DropDownMenu from '../components/DropDownMenu'
import Services from '../components/Services.css'
import '../components/Navbar.css'
import '../components/Dropdown.css'
import '../components/Button.css'
import '../components/Menu.css'
import '../components/Services.css'

const ServicesScreen = () => {
  return (
    <>
    
      <Container>
        <h1
          style={{
            marginTop: '-15px',
            marginBottom: '10px',
          }}
        >
          Serviciile oferite de firma noastra:
        </h1>
        <head>
          <link
            href='https://fonts.googleapis.com/css?family=Open+Sans:300i,400'
            rel='stylesheet'
          ></link>
        </head>
        <body>
          <div className='containers'>
            <div class='container-fluid'>
              <div class='row' center>
                <li class='nav-item dropdown has-megamenu'>
                  <div
                    className='cards'
                    style={{
                      padding: '10px',
                      marginBottom: '-40px',
                      marginTop: '100px',
                      marginRight: '10px',
                      marginLeft: '-50px',
                    }}
                  >
                    <h4
                      className='title'
                      style={{
                        marginLeft: '20px',
                        marginTop: '40px',
                      }}
                    >
                      PREȚURI REDUSE
                    </h4>
                    <div className='bar'>
                      <div className='emptybar'></div>
                      <div className='filledbar'></div>
                    </div>

                    <div
                      className='circle'
                      style={{
                        marginLeft: '30px',
                      }}
                    >
                      <svg
                        class='checkmark'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 52 52'
                      >
                        <circle
                          class='checkmark__circle'
                          cx='26'
                          cy='26'
                          r='25'
                          fill='none'
                        />
                        <path
                          class='checkmark__check'
                          fill='none'
                          d='M14.1 27.2l7.1 7.2 16.7-16.8'
                        />
                      </svg>
                    </div>
                  </div>

                  <div
                    className='cards'
                    style={{
                      padding: '10px',
                      marginBottom: '-40px',
                      marginTop: '40px',
                      marginRight: '10px',
                      marginLeft: '-50px',
                    }}
                  >
                    <h4
                      className='title'
                      style={{
                        marginLeft: '-10px',
                        marginTop: '30px',
                      }}
                    >
                      CONSULTAȚIE GRATUITĂ
                    </h4>
                    <div className='bar'>
                      <div className='emptybar'></div>
                      <div className='filledbar'></div>
                    </div>
                    <div
                      className='circle'
                      style={{
                        marginLeft: '30px',
                      }}
                    >
                      <svg
                        class='checkmark'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 52 52'
                      >
                        <circle
                          class='checkmark__circle'
                          cx='26'
                          cy='26'
                          r='25'
                          fill='none'
                        />
                        <path
                          class='checkmark__check'
                          fill='none'
                          d='M14.1 27.2l7.1 7.2 16.7-16.8'
                        />
                      </svg>
                    </div>
                  </div>
                </li>
              </div>
            </div>

            <div class='container-fluid'>
              <div class='row' center>
                <li class='nav-item dropdown has-megamenu'>
                  <div
                    className='cards'
                    style={{
                      padding: '10px',
                      marginBottom: '-40px',
                      marginTop: '100px',
                      marginRight: '10px',
                      marginLeft: '-50px',
                    }}
                  >
                    <center>
                    <h4
                      className='title'
                      style={{
                        marginLeft: '30px',
                        marginTop: '40px',
                      }}
                    >
                      PLATA ÎN RATE
                    </h4>
                    </center>
                    <div className='bar'>
                      <div className='emptybar'></div>
                      <div className='filledbar'></div>
                    </div>
                    <div
                      className='circle'
                      style={{
                        marginLeft: '30px',
                      }}
                    >
                      <svg
                        class='checkmark'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 52 52'
                      >
                        <circle
                          class='checkmark__circle'
                          cx='26'
                          cy='26'
                          r='25'
                          fill='none'
                        />
                        <path
                          class='checkmark__check'
                          fill='none'
                          d='M14.1 27.2l7.1 7.2 16.7-16.8'
                        />
                      </svg>
                    </div>
                  </div>
                  <div
                    className='cards'
                    style={{
                      padding: '10px',
                      marginBottom: '-40px',
                      marginTop: '40px',
                      // marginRight: '10px',
                      // marginLeft: '-50px',
                    }}
                  >
                    <h4
                      className='title'
                      style={{
                        marginLeft: '-10px',
                        marginTop: '40px',
                      }}
                    >
                      REPARAȚII ȘI MONTAJ
                    </h4>
                    <div className='bar'>
                      <div className='emptybar'></div>
                      <div className='filledbar'></div>
                    </div>
                    <div
                      className='circle'
                      style={{
                        marginLeft: '30px',
                      }}
                    >
                      <svg
                        class='checkmark'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 52 52'
                      >
                        <circle
                          class='checkmark__circle'
                          cx='26'
                          cy='26'
                          r='25'
                          fill='none'
                        />
                        <path
                          class='checkmark__check'
                          fill='none'
                          d='M14.1 27.2l7.1 7.2 16.7-16.8'
                        />
                      </svg>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </body>
      </Container>
    </>
  )
}

export default ServicesScreen
