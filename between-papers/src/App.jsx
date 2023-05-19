import './App.css';
import BookUnit from './components/book-unit';
function App() {
  return (
    <div className="App">
      <div className='header'></div>
      <div className='catalogue'>
        <h1 className='catalogueTitle'>Catálogo</h1>
        <div className='catalogueUnits'>
          <BookUnit
          name='Nudos y cruces'
          stars='5'
          img='nudos-y-cruces_ian-rankin'/>
          <BookUnit
          name='Crimen y castigo'
          stars='4'
          img='crimen-y-castigo_fiódor-dostoyevski'/>
        </div>
      </div>
    </div>
  );
}

export default App;
