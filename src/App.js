import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        <div className='headerContent'>
          <button className='bto1'>all</button>
          <button className='bto1'>actived</button>
          <button className='bto1'>completed</button>
        </div>
        <div className='bodyContent'></div>

          <span className='left'>items left</span>
          <span className='right'>Clear completed</span>

      </div>
    </div>
  );
}

export default App;
