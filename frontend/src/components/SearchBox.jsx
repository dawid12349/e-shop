import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

const SearchBox = ({ history }) => {
  const [input, setinput] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if(input.trim()) 
      history.push(`/search/${input}`)
    else 
      history.push('/')
  }

  return (
    <Form onSubmit={submitHandler} inline>
      <Form.Control type='text' name='q' onChange={(e) => setinput(e.target.value)}
       placeholder='Search...'  className='mr-sm-2 ml-sm-5'></Form.Control>
      <Button style = {{background: "#BF1363" }}type='submit' className='p-2'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
