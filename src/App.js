import './App.css';


function App() {
  return (
    <div>
      <div className="App">
        <div className='headerContent'>
          <span className='bto1'>all</span>
          <span className='bto1'>actived</span>
          <span className='bto1'>completed</span>
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className='bodyContent'></div>
        <span className='left'>items left</span>
        <span className='right'>Clear completed</span>
      </div>
    </div>
  );
}
function Lable(){

   const box=document.getElementsByClassName('.App')
   console.log(box)
   return 
}
Lable()
export default App;
