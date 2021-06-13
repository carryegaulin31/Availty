import React from 'react'
import styled from 'styled-components'

const Input = styles.input`
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;
background-color: lightpink ;
`


export default () => (
  <Input type="text" name="firstName" />
)