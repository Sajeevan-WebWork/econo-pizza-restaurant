import './Header.scss';
import {SubHeading} from '../../components'
import {images} from '../../constants'
const Header = () => (
  <section className='app__header app__wrapper section__padding' id='home'>
    <aside className="app__wrapper_info">
      <SubHeading  title="Chase the new flavour" />
      <h1 className="app__header_h1">The key to Fine Dining</h1>
      <p className="p__opensans" style={{marginBottom: "2rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aperiam tenetur iusto labore temporibus voluptatibus fuga cum, tempore repellendus voluptates repellat ducimus ipsam iste, eos nulla ad alias hic officiis.</p>
      <button className="custom__button" type='button'>Explore Menu</button>
    </aside>
    <aside className="app__wrapper_img">
      <img src={images.welcome} alt="welcome" />
    </aside>
  </section>
);

export default Header;
