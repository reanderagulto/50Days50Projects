import React, {useState} from 'react'; 
import SplitContent from '../components/SplitContent';

const Layout = () => {

  const [hover, setHover] = useState('');

  const mouseEnter = (e) => {
    setHover(e.target.getAttribute('data-class'));
  }

  const mouseLeave = (e) => {
    setHover('');
  }
 
  return (
    <section className={`main-section__container ${hover}`}>
      <SplitContent 
        background="/images/ps.jpg"
        classes="split__content--left"
        headerLabel="Playstation 5"
        mouseEnter={(e) => mouseEnter(e)}
        mouseLeave={(e) => mouseLeave(e)}
        dataClass='hover-left'
      />
      <SplitContent 
        background="/images/xbox.jpg"
        classes="split__content--right"
        headerLabel="XBox Series X"
        mouseEnter={(e) => mouseEnter(e)}
        mouseLeave={(e) => mouseLeave(e)}
        dataClass='hover-right'
      />
    </section>
  )
}

export default Layout
