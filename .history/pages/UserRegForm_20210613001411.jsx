import React from 'react'
import Page from '../components/Page'
import Title from '../components/Title'
import InputBox from '../components/InputBox'

export default () => (
  <Page>
    <Title />
    <InputBox placeholder="Name" />
    <InputBox placeholder="LastName" />
    <InputBox placeholder="NPI" />
    <InputBox placeholder="Tele No" />
    <InputBox placeholder="Email" />
  </Page>
)
