import CustomHead from '../components/CustomHead'
import MainMenu from '../components/MainMenu'

export default () => (
  <div className='page'>
    <CustomHead />

    <h1><b>SPF</b> validator</h1>

    <MainMenu activeItem='/what-is-spf' />

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

  </div>
)
