import React from 'react'
import { Pagination } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Paginate = ({ pages, page, isAdmin=false, keyword = '' }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${x + 1}`
                  : `/produse/page/${x + 1}`
                : `/produse/productlist/${x + 1}`
            }
          >
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />

          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate
