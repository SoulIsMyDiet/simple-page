import './CoreConcept.css';

export function CoreConcept(props){
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