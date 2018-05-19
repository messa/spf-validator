import React from 'react'
import CustomHead from '../components/CustomHead'
import DomainForm from '../components/DomainForm'
import DomainSPFInspector from '../components/DomainSPFInspector'

const defaultDomain = 'gmail.com'

export default class IndexPage extends React.Component {

  state = {
    domain: defaultDomain,
  }

  handleDomainChange = (domain) => {
    this.setState({ domain })
  }

  render() {
    return (
      <div className='page'>
        <CustomHead />

        <h1>SPF validator</h1>

        <p>
          <strong>Sender Policy Framework (SPF)</strong> is an email validation protocol designed to
          detect and block email spoofing by providing a mechanism to allow receiving mail exchanger
          to verify that incoming mail from a domain comes from an IP Address authorized by that
          domain's administrators.
        </p>

        <p>
          The list of authorized sending hosts and IP addresses for a domain is published
          in the <strong>Domain Name System (DNS)</strong> records for that domain in the form of
          a specially formatted <strong>TXT record</strong>.
          Email spam and phishing often use forged "from" addresses and domains,
          so publishing and checking SPF records can be considered one of the most reliable
          and simple to use anti-spam techniques.
        </p>

        <p style={{ textAlign: 'right' }}>
          &ndash; <a href='https://en.wikipedia.org/wiki/Sender_Policy_Framework'>Wikipedia</a>
        </p>

        <p>
          <strong>
            Use the form below to check any domain SPF records.
          </strong>
        </p>

        <p>
          The most common problem that this validator checks is the maximum number
          of 10 (ten) DNS resolves when email recipient server checks the SPF record.
        </p>

        <DomainForm
          defaultDomain={defaultDomain}
          onChangeDomain={this.handleDomainChange}
        />

        <br /><br />

        <DomainSPFInspector
          domain={this.state.domain}
        />

      </div>
    )
  }

}
