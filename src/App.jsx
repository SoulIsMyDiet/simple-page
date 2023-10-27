import reactImg from './assets/react-core-concepts.png';
import component from './assets/components.png';

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
            <img src={props.img} alt={props.alt}/>
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
                          <ReactComponnent title='Component' description='some description'
                          img={component} alt='component'/>
                          <ReactComponnent/>
                          <ReactComponnent/>
                          <ReactComponnent/>
                      </ul>
                  </section>
              </div>
          </main>
      </div>
  );
}

export default App;
