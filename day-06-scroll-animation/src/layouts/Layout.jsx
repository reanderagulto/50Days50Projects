import React, {useEffect} from 'react'; 
import Contents from '../components/Contents';

const Layout = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.cards__item');

    function scrollBehavior(){

      const triggerBottom = window.innerHeight / 5 * 4;

      cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom) {
          card.classList.add('active')
        } else {
          card.classList.remove('active')
        }

      });
    }

    scrollBehavior();

    window.addEventListener('scroll', scrollBehavior);
    
  }, []);

  return (
    <section className="main-section__container">
        <h1>Scroll to see the animation</h1>
        <Contents />
    </section>
  )
}

export default Layout
