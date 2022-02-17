import './App.css';
import Header from './Components/Header/Header';
import { ListProvider } from './contexts/ListContext';
import Shopping from './Views/Shopping/Shopping';

function App() {
  return (
    <ListProvider>
      <div className="App">
        <header>
          <Header />
        </header>
        <Shopping />
      </div>
    </ListProvider>
  );
}

export default App;
