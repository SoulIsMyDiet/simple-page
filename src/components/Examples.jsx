import { Example } from "./Example";
import { EXAMPLES } from "../data";
import { useState } from 'react';
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    const [conceptState, setConceptState] = useState();

    function clickHandler(clickedButton) {
        setConceptState(clickedButton);
    }

    let tabContent = <p>Choose tab!</p>;
    if (conceptState) {
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

    return <Section title='Examples' id='examples'>
        <Tabs ButtonsContainer='menu'
            buttons={<><Example isSelected={conceptState === 'components'}
                                  onClick={() => clickHandler('components')}>Component</Example>
            <Example isSelected={conceptState === 'jsx'} onClick={() => clickHandler('jsx')}>Jsx</Example>
            <Example isSelected={conceptState === 'props'} onClick={() => clickHandler('props')}>Props</Example>
            <Example isSelected={conceptState === 'state'} onClick={() => clickHandler('state')}>State</Example></>}>
            {tabContent}
        </Tabs>

    </Section>
}