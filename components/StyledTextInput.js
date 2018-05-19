export default (props) => (
  <div className='StyledTextInput'>
    <style jsx>{`
      .domainInput {
        border-top: none;
        border-right: none;
        border-left: none;
        border-bottom: 1px solid black;
        font-size: 24px;
      }
    `}</style>
    <input
      className='domainInput'
      type="text"
      {...props}
    />
  </div>
)
