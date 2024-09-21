
import './AboutUs.scss';
import {images} from '../../constants'
const AboutUs = () => (
  <section className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus__overlay flex__center">
      <img src={images.G} alt="g overlay img" />
    </div>
    <div className="app__aboutus__content flex__center">
      
      <div className="app__aboutus_content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod facere laborum repudiandae saepe cumque, et pariatur ea dolorem sapiente!</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>

      <div className="app__aboutus_content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus_content_history">
        <h1 className="headtext__cormorant">our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon__img' />
        <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quod facere laborum repudiandae saepe cumque, et pariatur ea dolorem sapiente!</p>
        <button className="custom__button" type='button'>Know More</button>
      </div>
    </div>
  </section>
);

export default AboutUs;
