import logo from '../assets/logo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Header({ completed, total}) {
    return (
        <header>
            <img scr={logo} alt=""/>
            <h1>TO-DO LIST</h1>
            <div>
                <FontAwesomeIcon icon="fas fa-tasks" />
                <span>{completed} / {total}</span>
            </div>
        </header>
    )
}
export default Header;