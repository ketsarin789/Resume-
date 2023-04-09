import './App.css';
import {Main} from '../src/page/Main'
import {Skills} from './page/Skills';
import {Projects} from './page/Projects';
import {Education} from './page/Education';
import {Experience} from './page/Experience';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
       <Main />
       <Skills />
       <Projects />
       <Education />
       <Experience />
      </header>
      
    </div>
  );
}

export default App;
