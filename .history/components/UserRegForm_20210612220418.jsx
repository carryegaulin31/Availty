import React from 'react'

export default ({ term, setter }) => (
    <Input type="text" name="" value={term} onChange={event => setter(event.target.value)} />
)