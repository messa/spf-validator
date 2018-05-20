export default (props) => (
  <div className='StyledTextInput'>
    <style jsx>{`
      .domainInput {
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid black;
        font-family: monospace;
        font-size: 24px;
        height: 36px;
        background: transparent;
        color: black;
        display: block;
        border-top-width: initial;
        border-right-width: initial;
        border-left-width: initial;
        border-top-color: initial;
        border-right-color: initial;
        border-left-color: initial;
        padding: 0;
        margin: 0 auto;
        outline: none;
        width: 90%;
        max-width: 900px;
      }
    `}</style>
    <input
      className='domainInput'
      type="text"
      {...props}
    />
  </div>
)
