import Head from 'next/head'

const globalStyles = `

  body {
    font-family: sans-serif;
    font-size: 16px;
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
    padding: 1rem 2em;
  }

`

export default () => (
  <Head>
    <title>SPF validator</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>{globalStyles}</style>
  </Head>
)
