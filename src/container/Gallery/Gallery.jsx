/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { SubHeading } from '../../components'; // Assuming MenuItem is not used
import { images } from '../../constants';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import './Gallery.scss';

const galleryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <>
      <section className="app__gallery flex__center">
        <div className="app__gallery-content">
          <SubHeading title="Instagram" />
          <h1 className="headtext__cormorant">Photo Gallery</h1>
          <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt libero doloremque porro praesentium omnis, voluptates veniam sunt accusantium repellat doloribus!
          </p>
          <button type='button' className='custom__button'>View More</button>
        </div>

        <div className="app__gallery-images">
          <div className="app__gallery-images_container" ref={scrollRef}>
            {galleryImages.map((image, index) => (
              <div className="app__gallery-images_card flex__center" key={`gallery_image_${index + 1}`}>
                <img src={image} alt={`gallery ${index + 1}`} />
                <BsInstagram className='gallery__image_icon' />
              </div>
            ))}
          </div>
          <div className="app__gallery-images_arrow">
            <BsArrowLeftShort className='gallery__arrow__icon' onClick={() => scroll("left")} />
            <BsArrowRightShort className='gallery__arrow__icon' onClick={() => scroll("right")} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
