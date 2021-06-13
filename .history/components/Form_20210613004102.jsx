import React, { useState } from 'react'

export default () => {
    const [nameFirst, setNameFirst] = useState('')
    const [nameLast, setNameLast] = useState('')
    const [NPI, setNPI] = useState ('')
    const [teleNumber, setTeleNumber] = useState (''),
    const [email, setEmail] = useState ('')

return (
    <div className="Form">
    <div className="title">Availty Provider Registration Page</div>
    <div className="form">
    <input
    type="text"
    name="nameFirst"
    value={nameFirst}
    onChange={event => setNameFirst(event.target.value)}
    />
    <input
    type="text"
    name="nameLast"
    value={nameLast}
    onChange={event => setNameLast(event.target.value)}
    />
    <input
    type="text"
    name="NPI"
    value={NPI}
    onChange={event => setNPI(event.target.value)}
    />
    <input
    type="text"
    name="teleNumber"
    value={teleNumber}
    onChange={event => setTeleNumber(event.target.value)}
    />
    <input
    type="text"
    name="email"
    value={email}
    onChange={event => setEmail(event.target.value)}
    />
    <button type="button" aria-label</div></div>
)

}