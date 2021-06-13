import React from 'react'
import styled from 'styled-components'

const Input = styled.input`
border-radius: 8px;
font-size: 16px;
padding: 5px;
margin: 20px 0;
outline: none;
background-color: lightgra
export default ({ term, setter }) => (
  <InputBox type="text" value={term} onChange={event => setter(event.target.value)} />
)
