const keyWordExplainingReact = ['Nice', 'Innovative', 'Great'];
const reactKeyWordLength = keyWordExplainingReact.length;
function genReactKeyWord(reactKeyWordLength){
    return Math.floor(Math.random() * reactKeyWordLength);
}
function Header() {
    const keyWord = keyWordExplainingReact[genReactKeyWord(reactKeyWordLength)];
    return (
        <header>
            <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {keyWord} React concepts you will need for almost any app you are
                going to build!
            </p>
        </header>
    )
}

function App() {
  return (
      <div>
          <Header/>
          <main>
              <h2>Time to get started!</h2>
          </main>
      </div>
  );
}

export default App;
