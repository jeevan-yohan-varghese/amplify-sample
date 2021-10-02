import './App.css';
import memoji from './memoji.png';
import github from './github.png';
function App() {
  return (
    <div id="main_div">
      <img src={memoji} width="300" alt="memoji"/>
      <h1>Hi, I am Jeevan</h1>
      <p>VIT, Vellore</p>
      <a href="https://github.com/jeevan-yohan-varghese" target="_blank" rel="noreferrer">
      <div class="github_link" onClick>

        <img src={github} width="30" alt="github"/>
        <p>GitHub Profile</p>
      </div>
      </a> 
    </div>
  );
}

export default App;
