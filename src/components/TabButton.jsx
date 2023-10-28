export default function TabButton(props){
    function clickHandler(){
        console.log('hello world')
    }
    return <li>
        <button onClick={clickHandler}>{props.children}</button>
    </li>
}