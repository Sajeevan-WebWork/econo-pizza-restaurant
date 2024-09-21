/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import './Laurels.scss';
import { SubHeading } from '../../components'; // Assuming MenuItem is not used
import { data, images } from '../../constants';

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => (
  <div className="app__laurels__awards_cards">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels__awards_cards__content">
      <p className="p__cormorant" style={{ color: "#DCCA98" }}>{title}</p>
      <p className="p__cormorant">{subtitle}</p>
    </div>
  </div>
);

const Laurels = () => (
  <section className='app__bg app__laurels  app__wrapper section__padding' id='awards'>
    <div className="app__wrapper_info">
      <SubHeading title="Awards and recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels__awards">
        {
          data.awards.map((award) => <AwardCard award={award} key={award.title} />)
        }
      </div>
    </div>

    <div className="app__wrapper_img ">
      {/* Add image or content here if needed */}
      <img src={images.laurels} alt="laurels" />
    </div>
  </section>
);

export default Laurels;
