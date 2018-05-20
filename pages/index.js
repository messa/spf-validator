import React from 'react'
import CustomHead from '../components/CustomHead'
import MainMenu from '../components/MainMenu'
import SPFValidator from '../components/SPFValidator'

export default () => (
  <div className='page'>
    <CustomHead />

    <h1><b>SPF</b> validator</h1>

    <MainMenu activeItem='/' />

    <p style={{ textAlign: 'center' }}>
      Please enter the SPF record itself (starting with <code>v=spf1</code>) or a DNS domain name:
    </p>

    <SPFValidator />

  </div>
)
