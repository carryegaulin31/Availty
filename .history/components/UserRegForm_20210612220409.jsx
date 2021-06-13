import React from 'react'

export default ({ term, setter }) => (
    <Input type="text" name="search" value={term} onChange={event => setter(event.target.value)} />
)
