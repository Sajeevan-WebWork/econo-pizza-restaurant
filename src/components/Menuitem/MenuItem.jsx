/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

import './MenuItem.scss';

const MenuItem = ({ title, price, tags}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem_head">
      <div className="app__menuitem_name">
        <p className="p__cormorant" style={{color: "#DCCA87"}}> {title} </p>
      </div>

      <div className="app__menuitem_dash"></div>

      <div className="app__menuitem_price">
        <p className="p__cormorant"> {price} </p>
      </div>
    </div>

    <div className="app__menuitem_sub">
      <p className="p__opensans" style={{color: "#AAA"}}> {tags} </p>
    </div>
  </div>
);

export default MenuItem;
