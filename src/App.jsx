import {CORE_CONCEPTS} from './data.js';
import {Header} from "./components/Header";
import {CoreConcept} from "./components/CoreConcept";
import TabButton from"./components/TabButton";

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
                          <CoreConcept
                              title={CORE_CONCEPTS[0].title}
                              description={CORE_CONCEPTS[0].description}
                              image={CORE_CONCEPTS[0].image}
                              />
                          <CoreConcept {...CORE_CONCEPTS[1]}/>
                          <CoreConcept {...CORE_CONCEPTS[2]}/>
                          <CoreConcept {...CORE_CONCEPTS[3]}/>
                      </ul>
                  </section>
                  <section id='examples'>
                      <menu>
                          <TabButton>Component</TabButton>
                          <TabButton>Jsx</TabButton>
                          <TabButton>Props</TabButton>
                          <TabButton>State</TabButton>
                      </menu>
                  </section>
              </div>
          </main>
      </div>
  );
}

export default App;
