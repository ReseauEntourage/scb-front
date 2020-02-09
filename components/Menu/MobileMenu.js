import './MobileMenu.scss';
import scb from '../../static/images/scb.png';
import close from '../../static/images/close.svg';
import arrow from '../../static/images/arrow.svg';
import arrow_white from '../../static/images/arrow-white.svg';

const MobileMenu = ({ closeMenu }) => {
  return (
    <div className="MobileMenu-container--sidebar">
      <div className="MobileMenu__top-container">
        <div className="MobileMenu__logo-container">
          <a href='/'><img src={scb} alt="" className="MobileMenu-logo" /></a>
        </div>
        <div className="MobileMenu-close-container" onClick={closeMenu}>
          <img src={close} alt="" className="MobileMenu-close" />
        </div>
      </div>

      <div className="MobileMenu__list-container">
        <ul className="MobileMenu__list-container--ul">
          <li className="MobileMenu__list-item">
            <a href="/parcours">
              <span className="item-title">Les parcours</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </a>
          </li>
          <li className="MobileMenu__list-item">
            <a href="/defis">
              <span className="item-title">Les défis</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </a>
          </li>
          <li className="MobileMenu__list-item">
            <a href="/a-propos">
              <span className="item-title">A propos</span>
              <img src={arrow} alt="arrow" className="arrow" />
            </a>
          </li>
        </ul>
      </div>

      <a href='https://www.entourage.social/' target="_blank">
        <div className="MobileMenu__entourage-container">
          <span className="entourage-title">Agir avec entourage</span>
          <img src={arrow_white} alt="arrow" className="arrow" />
        </div>
      </a>
    </div>
  );
};

export default MobileMenu;
