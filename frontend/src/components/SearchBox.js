import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'
import './styles.css'

const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Caută un produs...'
        className='mr-sm-2 ml-sm-4'
      ></Form.Control>
      
      <Button type='submit' className='btn-success' style={{
          textAlign: "center",
          maxWidth: "950px",
          margin: "0 auto",
          border: "1px solid #e6e6e6",
          padding: "10px",
          marginTop: "-45px",
          marginBottom: "32px",
          marginLeft: "245px"
        }} >
      <BiSearch size={18}/>
      </Button>
    </Form>
  )
}

export default SearchBox
