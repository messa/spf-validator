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
      <div>
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
