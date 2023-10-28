import reactImg from "../assets/react-core-concepts.png";
import './Header.css';

const keyWordExplainingReact = ['Nice', 'Innovative', 'Great'];
const reactKeyWordLength = keyWordExplainingReact.length;
function genReactKeyWord(reactKeyWordLength){
    return Math.floor(Math.random() * reactKeyWordLength);
}
export function Header() {
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