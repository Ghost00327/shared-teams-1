import './App.css';
import Header from './components/Layouts/Header';
import Body from './components/Layouts/Body';
function App() {
  return (
    <div className="App">
      <Header />
      <div className='flex-1'></div>
      <Body />
    </div>
  );
}

export default App;
