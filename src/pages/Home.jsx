import logo from '../assets/react.svg'
import {Link} from 'react-router-dom'
const Home = () => {

    return (
        <Link to="/inicio">
        <img src={logo} width="300" alt="logo do React" />
        </Link>
    )
}

export default Home