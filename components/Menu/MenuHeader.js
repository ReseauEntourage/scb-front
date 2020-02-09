import './MenuHeader.scss';
import scb from '../../static/images/scb.png';
import menu from '../../static/images/ios-menu.svg';

import MobileMenu from './MobileMenu';

const MenuHeader = ({ openMenu, closeMenu, indicator, parcours }) => {
  return (
    <div className="MenuHeader center">
      <div className="MenuHeader__burger-icon" onClick={openMenu}>
        <img src={menu} alt="menu icon" />
      </div>
      <div className="MenuHeader__scb-logo center">
        <a href="/"><img src={scb} alt="scb logo"/></a>
      </div>
      {indicator}
      <div className="MenuHeader__sidebar-container">
        <MobileMenu closeMenu={closeMenu} />

        {parcours}
        <div className="MenuHeader__sidebar-container--background" onClick={closeMenu} />
      </div>
    </div>
  );
};

export default MenuHeader;
