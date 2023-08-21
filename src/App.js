import {Routes, Route} from 'react-router-dom';
import './App.css';
import MovieLists from './Components/MovieLists';
import MovieDetails from './Components/MovieDetails'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MovieLists />}/>
        <Route path='/movieDetails/' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
}

export default App;
