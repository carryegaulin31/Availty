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
    </div></div>
)

}