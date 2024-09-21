
import './Chef.scss';
import {images} from '../../constants';
import {SubHeading} from '../../components/'

const Chef = () => (
  <section className='app__bg app__wrapper section__padding'>
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title={"Chef's Word"} />
      <h1 className="headtext__cormorant">What we Believe in</h1>
      <div className="app__chef__content">
        <div className="app__chef__content__quote">
          <img src={images.quote} alt="qoute" />
          <p className="P__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima vitae dicta repellendus, natus ab nisi?</p>
        </div>
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatum iusto quas ut cupiditate facere esse debitis! Eius minima quidem, possimus delectus libero labore, doloribus ratione tenetur deserunt totam quae!</p>
      </div>

      <div className="app__chef__sign">
        <p>Keviv Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </section>
);

export default Chef;
