import './App.css';
import BookUnit from './components/book-unit';
function App() {
  return (
    <div className="App">
      <div className='headerContainer'>
        <div className="header">
          <img src={require('./img/between-papers-logo.png')} alt="Logo" />
          <ul className='navbar'>
            <li>Home</li>
            <li>Log in</li>
            <li>register</li>
            <li>Vista cliente</li>
            <li>Vista admin</li>
          </ul>
        </div>        
      </div>
      <div className='catalogue'>
        <h1 className='catalogueTitle'>Catálogo</h1>
        <div className='catalogueUnits'>
          <BookUnit
          name='Nudos y cruces'
          stars='5'
          img='nudos-y-cruces_ian-rankin'
          alt='Nudos y cruces - Ian Rankin'
          price='30k'/>
          <BookUnit
          name='Crimen y castigo'
          stars='4'
          img='crimen-y-castigo_fiódor-dostoyevski'
          alt='Criemn y castigo - fiódor Dostoyevski'
          price='50k'/>
        </div>
      </div>
    </div>
  );
}

export default App;
