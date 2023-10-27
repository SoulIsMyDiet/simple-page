import reactImg from './assets/react-core-concepts.png';
import {CORE_CONCEPTS} from './data.js';

const keyWordExplainingReact = ['Nice', 'Innovative', 'Great'];
const reactKeyWordLength = keyWordExplainingReact.length;
function genReactKeyWord(reactKeyWordLength){
    return Math.floor(Math.random() * reactKeyWordLength);
}
function Header() {
    const keyWord = keyWordExplainingReact[genReactKeyWord(reactKeyWordLength)];
    return (
        <header>
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {keyWord} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function ReactComponnent(props){
    return (
        <li>
            <img src={props.image} alt={props.alt}/>
            <div>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>
        </li>
    )
}

function App() {
  return (
      <div>
          <Header/>
          <main>
              <h2>Time to get started!</h2>
              <div>
                  <section id="core-concepts">
                      <h2>Core concepts</h2>
                      <ul>
                          <ReactComponnent
                              title={CORE_CONCEPTS[0].title}
                              description={CORE_CONCEPTS[0].description}
                              image={CORE_CONCEPTS[0].image}
                              />
                          <ReactComponnent {...CORE_CONCEPTS[1]}/>
                          <ReactComponnent {...CORE_CONCEPTS[2]}/>
                          <ReactComponnent {...CORE_CONCEPTS[3]}/>
                      </ul>
                  </section>
              </div>
          </main>
      </div>
  );
}

export default App;
