import {Routes, Route} from 'react-router-dom';
import './App.css';
import MovieLists from './Components/MovieLists.js';
import MovieDetails from './Components/MovieDetails.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MovieLists />}/>
        <Route path='/movieDetails/:id' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
