import React from 'react'

export default class DomainSPFInspector extends React.Component {

  state = {
  }

  componentDidMount() {
    const { domain } = this.props
    this.fetchDomain(domain)
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // https://reactjs.org/docs/react-component.html#componentdidupdate
    const { domain } = this.props
    if (domain !== prevProps.domain) {
      this.fetchDomain(domain)
    }
  }

  async fetchDomain(domain) {
    try {
      const url = ("https://dns.google.com/resolve" +
        "?type=TXT" +
        `&name=${encodeURIComponent(domain)}`)
      const r = await fetch(url)
      const data = await r.json()
      this.setState({ [`resolveResponse_${domain}`]: data })
    } catch (e) {
      console.error(`fetchDomain failed: ${e}`)
    }
  }

  render() {
    const { domain } = this.props
    const resolveResponse = this.state[`resolveResponse_${domain}`]
    return (
      <div className='DomainSPFInspector'>
        <style jsx>{`
          pre {
            font-family: inconsolata, hack, monospace;
            font-size: 13px;
          }
        `}</style>
        <p>
          DNS TXT records for domain <code>{this.props.domain}</code>:
        </p>
        {!resolveResponse ? (
          <p>Loading...</p>
        ) : (
          <pre>{JSON.stringify(resolveResponse, null, 2)}</pre>
        )}
      </div>
    )
  }

}
