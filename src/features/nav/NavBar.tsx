import './styles/NavBar.css'

import NavLinks from './components/NavLinks';
import SearchBox from './components/SearchBox';


export default function NavBar() {

    return (
        <nav>
            <NavLinks />
            <SearchBox />
        </nav>
    )
}