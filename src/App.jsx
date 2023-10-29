import {CORE_CONCEPTS, EXAMPLES} from './data.js';
import {Header} from "./components/Header";
import {CoreConcept} from "./components/CoreConcept";
import TabButton from"./components/TabButton";
import { useState } from 'react';

function App() {

    const [conceptState, setConceptState] = useState();
    function clickHandler(clickedButton){
        setConceptState(clickedButton);
    }
    let tabContent = <p>Choose tab!</p>;
    if(conceptState){
        tabContent = (
            <div id='tab-content'>
            <h3>{EXAMPLES[conceptState].title}</h3>
        <p>{EXAMPLES[conceptState].description}</p>
    <code>
        {EXAMPLES[conceptState].code}
    </code>
            </div>
    );
    }


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
                          <TabButton isSelected={conceptState === 'components'} onClick={() => clickHandler('components')}>Component</TabButton>
                          <TabButton isSelected={conceptState === 'jsx'} onClick={() => clickHandler('jsx')}>Jsx</TabButton>
                          <TabButton isSelected={conceptState === 'props'} onClick={() => clickHandler('props')}>Props</TabButton>
                          <TabButton isSelected={conceptState === 'state'} onClick={() => clickHandler('state')}>State</TabButton>
                      </menu>
                      {tabContent}
                  </section>
              </div>
          </main>
      </div>
  );
}

export default App;
