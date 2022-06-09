import Header from './components/Header';
import 'boxicons';
import { BrowserRouter } from 'react-router-dom';
import Paginas from './components/Paginas';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Paginas />
      </BrowserRouter>
      
     
    </div>
  );
}

export default App;