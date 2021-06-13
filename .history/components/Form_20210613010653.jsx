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
    <div class="container">
    <div class="main">
    <form action="#" method="post" name="form_name" id="form_id" class="form_class" >
<h2>Javascript Form Submit Example</h2>
      <div className="title">Availty Provider Registration Page</>
      <div className="form">
        <input
          type="text"
          name="nameFirst"
          id="nameFirst"
          placeholder="Name"
          value={nameFirst}
          onChange={event => setNameFirst(event.target.value)}
        />
        <input
          type="text"
          name="nameLast"
          id="nameLast"
          placeholder="Last Name"
          value={nameLast}
          onChange={event => setNameLast(event.target.value)}
        />
        <input
          type="text"
          name="NPI"
          id="NPI"
          placeholder="NPI"
          value={NPI}
          onChange={event => setNPI(event.target.value)}
        />
        <input
          type="text"
          name="teleNumber"
          id="teleNumber"
          placeholder="Phone No"
          value={teleNumber}
          onChange={event => setTeleNumber(event.target.value)}
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
        <button type="button" aria-label="Submit" onClick={Submit}>Submit</button>
      </div>
    </div>
  )
}
