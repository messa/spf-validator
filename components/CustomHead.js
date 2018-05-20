import Head from 'next/head'

const globalStyles = `

  body {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.66rem;
    margin: 0;
    padding: 0;
    background: white;
    color: black;
  }

  a {
    color: #03c;
  }

  .page {
    max-width: 800px;
    margin: 0 auto;
    padding: .5rem 1.33em;
  }

  h1 {
    text-transform: uppercase;
    font-size: 26px;
    font-weight: 300;
    margin: 2em 0 1em 0;
    text-align: center;
  }

`

export default () => (
  <Head>
    <title>SPF validator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>{globalStyles}</style>
  </Head>
)
