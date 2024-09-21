/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import './SpecialMenu.scss';
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'

const SpecialMenu = () => (
  <>
    <section className='app__specialMenu flex__center section__padding' id='menu'>
      <div className="app__specialMenu__title">
        <SubHeading title={"Menu That Fits You Palatte"} />
        <h1 className="headtext__cormorant">Today's Special</h1>
      </div>

      <div className="app__specialMenu_menu">

        <div className="app__specialMenu_menu_wine flex__center">
          <p className='app__specialMenu_menu_heading'>Wine & Beer</p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              // <p>{wine.title}</p>
              <MenuItem key={wine.title + index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
          </div>
        </div>

        <figure className="app__specialMenu_menu_image">
          <img src={images.menu} alt="Special Menu" />
        </figure>

        <div className="app__specialMenu_menu_cocktails flex__center">
          <p className='app__specialMenu_menu_heading'>Cocktails</p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
            ))}
          </div>
        </div>

      </div>

      <div style={{marginTop: "15px"}}>
        <button type='button' className='custom__button'>View More</button>
      </div>
    </section>
  </>
);

export default SpecialMenu;
