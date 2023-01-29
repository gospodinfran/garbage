export default function Dropdown({ open }) {
    
    return (<div className={`dropdown-menu ${open ? 'active' : 'inactive'}`} >
        <h3>Options</h3>
        <ul>
            <DropdownItem text='My reservations'/>
            <DropdownItem text='Available times'/>
            <DropdownItem text='Contact' />
            <DropdownItem text='Settings' />
        </ul>
    </div>)
}

function DropdownItem({ text }) {
    return (
        <li className="list-item">
            <a>{text}</a>
        </li>
    )
}