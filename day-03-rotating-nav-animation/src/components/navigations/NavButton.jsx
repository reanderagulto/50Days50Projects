import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faBars,
  faXmark
} from '@fortawesome/free-solid-svg-icons'

const NavButton = () => {

  const openNav = () => {
    document.querySelector('.main-section__container').classList.add('shown');
  }

  const closeNav = () => {
    document.querySelector('.main-section__container').classList.remove('shown');
  }

  return (
    <div className="navigation__circle--container">
        <div className="navigation__circle">
            <button 
              type="button" 
              className="navigation__button" 
              id="navigation__close"
              onClick={closeNav}
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
            <button 
              type="button" 
              className ="navigation__button" 
              id="navigation__open"
              onClick={openNav}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
        </div>
    </div>
  )
}

export default NavButton