import './App.css';

//Import Components
import TopBar from './TopBar';
import SearchBar from './SearchBar';

function App() {

  return (
    <div className="App">
      <TopBar />
      <main>
        <SearchBar />
      </main>
    </div>
  );
}

export default App;
