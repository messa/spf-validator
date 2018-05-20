import CustomHead from '../components/CustomHead'
import MainMenu from '../components/MainMenu'

export default () => (
  <div className='page'>
    <CustomHead />

    <h1><b>SPF</b> validator</h1>

    <MainMenu activeItem='/about' />

    <p>
      Github: <a href='https://github.com/messa/spf-validator'>github.com/messa/spf-validator</a>
    </p>

  </div>
)
