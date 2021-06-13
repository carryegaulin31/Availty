import React, { useState } from 'react'

export default () => {
  const [nameFirst, setNameFirst] = useState('')
  const [nameLast, setNameLast] = useState('')
  const [NPI, setNPI] = useState('')
  const [teleNumber, setTeleNumber] = useState('')
  const [email, setEmail] = useState('')

  const Submit = () => {

  }

  return (
    <div className="Form">
      <div className="title">Availty Provider Registration Page</div>
      <div className="form">
        <input
          type="text"
          name="nameFirst"
          placeholder="Name"
          value={nameFirst}
          onChange={event => setNameFirst(event.target.value)}
        />
        <input
          type="text"
          name="nameLast"
          placeholder="Last Name"
          value={nameLast}
          onChange={event => setNameLast(event.target.value)}
        />
        <input
          type="text"
          name="NPI"
          placeholder="NPI"
          value={NPI}
          onChange={event => setNPI(event.target.value)}
        />
        <input
          type="text"
          name="teleNumber"
          placeholder
          value={teleNumber}
          onChange={event => setTeleNumber(event.target.value)}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="button" aria-label="Submit" onClick={Submit}>Submit</button>
      </div>
    </div>
  )
}