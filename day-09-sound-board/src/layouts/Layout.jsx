import React from 'react';
import ButtonComponent from '../components/ButtonComponent';

const Layout = () => {
  
  const soundSounds = [
    'applause',
    'boo', 
    'gasp', 
    'tada', 
    'victory', 
    'wrong'
  ];

  const resetSound = () => {
    soundSounds.forEach(sound => {
      const song = document.getElementById(sound);

      song.pause();
      song.currentTime = 0;

    });
  }

  const playSounds = (e) => {
    resetSound();

    const id = e.target.getAttribute('data-id');
    document.getElementById(id).play();
  }

  return (
    <section className={`main-section__container`}>
      {soundSounds && soundSounds.map((item, index) => {
        return (
          <div className="main-section__button-container" key={index}>
            <audio key={`audio-${index}`} id={item} src={`/sounds/${item}.mp3`}></audio>
            <ButtonComponent 
              key={`btn-${index}`}
              label={item}
              dataId={item}
              onClick={(e) => playSounds(e)}
            />
          </div>
        )
      })}
    </section>
  )
}

export default Layout
