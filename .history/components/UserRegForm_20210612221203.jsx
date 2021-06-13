import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;
background-color: lightyellow;
`

export default () => (
    <Form>
  <Input type="text" name="nameFirst" placeholder="Name" />
  <Input type="text" name="nameLast" placeholder="Last name"/>
  <Input type="text" name="NPI" placeholder="NPI" />
  <Input type="text" name="telenumber" placeholder="Phone No"/>
  <Input type="text" name="email" placeholder="Email" />
  </Form>
  )
