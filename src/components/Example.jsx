export function Example({children, onClick, isSelected}){
    return <li>
        <button className={isSelected ? 'active' : ''} onClick={onClick}>{children}</button>
    </li>
}