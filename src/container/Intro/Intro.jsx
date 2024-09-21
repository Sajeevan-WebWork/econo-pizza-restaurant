// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';
import './Intro.scss';

const Intro = () => {
  const vdiRef = useRef(null);
  const [playVideo, setplayVideo] = useState(false);

  const handleVideo = () => {
    setplayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      vdiRef.current.pause();
    } else {
      vdiRef.current.play()
    }
  }



  return (
    <>
      <section className="app__video">
        <video
          src={meal}
          type="video/mp4"
          ref={vdiRef}
          loop
          controls={false}
          muted
        />
        <div className="app__video__overlay flex__center">
          <div className="app__video__overlay__circle flex__centert"
            onClick={handleVideo}>
            {playVideo 
            ? <BsPauseFill color='#FFF' fontSize={30}></BsPauseFill>
            : <BsFillPlayFill color='#FFF' fontSize={30}></BsFillPlayFill>}
          </div>
        </div>
      </section>
    </>
  );
};

export default Intro;
