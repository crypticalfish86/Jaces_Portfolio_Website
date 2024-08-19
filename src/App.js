import './App.css';
import {Header} from './components/1.Header/Header'
import {Body} from './components/2.Body/Body'
import {Footer} from './components/3.Footer/Footer'

function App() {
  
  return (
    <div className="App">
      <div className='Background_Image'>
        <Header />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;
