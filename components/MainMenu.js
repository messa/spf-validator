import Link from 'next/link'

const MenuItem = ({ href, children, activeItem }) => {
  if (activeItem === href) {
    return (<strong>{children}</strong>)
  } else {
    return (<Link href={href} prefetch><a>{children}</a></Link>)
  }
}

export default ({ activeItem }) => (
  <nav>
    <style jsx>{`
      nav {
        margin-top: 2em;
        margin-bottom: 2em;
        text-align: center;
      }
      nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      nav ul li {
        display: inline-block;
        font-weight: 300;
        font-size: 14px;
        text-transform: uppercase;
        padding: 0 10px;
      }
      nav ul li :global(strong) {
        font-weight: 500;
        color: #330;
        border-bottom: 2px solid #996;
        padding: 0 6px;
      }
      nav ul li :global(a) {
        text-decoration: none;
        color: #663;
        padding: 0 6px;
      }
      nav ul li :global(a:hover) {
        text-decoration: none;
        border-bottom: 1px solid #cc9;
        color: #996;
        padding: 0 6px;
      }
    `}</style>
    <ul>
      <li><MenuItem href='/' activeItem={activeItem}>Validator</MenuItem></li>
      <li><MenuItem href='/what-is-spf' activeItem={activeItem}>What is SPF?</MenuItem></li>
      <li><MenuItem href='/syntax' activeItem={activeItem}>Syntax</MenuItem></li>
      <li><MenuItem href='/about' activeItem={activeItem}>About</MenuItem></li>
    </ul>
  </nav>
)
