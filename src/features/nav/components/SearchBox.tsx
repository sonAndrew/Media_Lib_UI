import '../styles/SearchBox.css'

import Separator from '../../../shared/components/Separator'

export default function SearchBox() {

    return (
        <div className='search-container'>
            <ul>
                <li><Separator mTop='0' mRight='0' mBottom='0' mLeft='10px' /></li>
                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                <li><Separator mTop='0' mRight='0' mBottom='0' mLeft='10px' /></li>
                <li><p>Search</p></li>
                <li><Separator mTop='0' mRight='70px' mBottom='0' mLeft='60px' /></li>
                <li><i className="fa-solid fa-filter filter-icon"></i></li>
            </ul>
        </div>
    )
}