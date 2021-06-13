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
  <Input type="text" name="nameFirst" placeholder="Name" />
  <Input type="text" name="nameLast" />
  <Input type="text" name="NPI" placeholder="" />
  <Input type="text" name="firstName" />
  <Input type="text" name="firstName" />
)
