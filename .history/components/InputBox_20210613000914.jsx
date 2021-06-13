import React from 'react'
import styled from 'styled-components'
export default ({ term, setter }) => (
  <InputBox type="text" value={term} onChange={event => setter(event.target.value)} />
)
