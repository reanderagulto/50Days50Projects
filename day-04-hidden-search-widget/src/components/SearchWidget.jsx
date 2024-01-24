import React, {useState} from 'react';
import ButtonComponent from './ButtonComponent';
import TextInput from './TextInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SearchWidget = () => {

    const [active, setActive] = useState(0);

    const buttonClick = (e) => {
        if(active === 0) {
            setActive(1);
        }
        else {
            setActive(0);
        }
    }

    return (
        <div className={`search-widget__container${active === 1 ? ' active' : ''}`}>
            <TextInput
                id="text-input"
                className="text-input"
                placeholder="Search..."
            />
            <ButtonComponent 
                id="button-input"
                label={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                on_click={(e) => buttonClick(e)}
                className="btn"
            />
        </div>
    )
}

export default SearchWidget
