import { Example } from "./Example";
import { EXAMPLES } from "../data";
import { useState } from 'react';

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

    return <section id='examples'>
        <menu>
            <Example isSelected={conceptState === 'components'}
                     onClick={() => clickHandler('components')}>Component</Example>
            <Example isSelected={conceptState === 'jsx'} onClick={() => clickHandler('jsx')}>Jsx</Example>
            <Example isSelected={conceptState === 'props'} onClick={() => clickHandler('props')}>Props</Example>
            <Example isSelected={conceptState === 'state'} onClick={() => clickHandler('state')}>State</Example>
        </menu>
        {tabContent}
    </section>
}