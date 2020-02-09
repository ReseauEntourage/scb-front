import './Menu.scss';
import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_MENU_INFO } from '../../graphql/querries';
import { withRouter } from 'next/router';
import { TimelineLite } from 'gsap';

import ListMenu from './ListMenu';
import MenuHeader from './MenuHeader';
import DesktopMenu from './DesktopMenu';

const handleClickClose = () => {
  const container = document.querySelector('.MobileMenu-container--sidebar');
  const background = document.querySelector('.MenuHeader__sidebar-container--background');
  const sidebar = document.querySelector('.MenuHeader__sidebar-container');

  const tl = new TimelineLite();

  tl
    .to(background, .3, { autoAlpha: 0, ease: Power0.easeInOut })
    .to(container, .3, { x: '0vw', ease: Power0.easeInOut }, '-= .2')
    .to(sidebar, .1, { autoAlpha: 1 })
    .to(background, .01, { x: '0vw', ease: Power0.easeInOut }, '+=.1');
}

const handleClickOpen = () => {
  const container = document.querySelector('.MobileMenu-container--sidebar');
  const background = document.querySelector('.MenuHeader__sidebar-container--background');
  const sidebar = document.querySelector('.MenuHeader__sidebar-container');

  const tl = new TimelineLite();
  tl
    .to(sidebar, .1, { autoAlpha: 1 })
    .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
    .to(container, .3, { x: '100vw', ease: Power0.easeInOut })
    .to(background, .3, { autoAlpha: 1, ease: Power0.easeInOut }, '-= .3');
}

const openMenuIntra = () => {
  const container = document.querySelector('.menu_sidebarleft_menu-container');
  const background = document.querySelector('.MenuHeader__sidebar-container--background');
  const sidebar = document.querySelector('.MenuHeader__sidebar-container');

  const tl = new TimelineLite();
  tl
    .to(sidebar, .1, { autoAlpha: 1 })
    .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
    .to(container, .3, { x: '-80vw', ease: Power0.easeInOut })
    .to(background, .3, { autoAlpha: 1, ease: Power0.easeInOut }, '-= .3');
}

const closeMenuIntra = () => {
  const container = document.querySelector('.menu_sidebarleft_menu-container');
  const background = document.querySelector('.MenuHeader__sidebar-container--background');
  const sidebar = document.querySelector('.MenuHeader__sidebar-container');

  const tl = new TimelineLite();
  tl
    .to(sidebar, .1, { autoAlpha: 1 })
    .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
    .to(container, .3, { x: '0vw', ease: Power0.easeInOut })
    .to(background, .3, { autoAlpha: 0, ease: Power0.easeInOut }, '-= .3');
}

const fieldSorter = (fields) => (a, b) => fields.map(o => {
  let dir = 1;
  if (o[0] === '-') { dir = -1; o = o.substring(1); }
  return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
}).reduce((p, n) => p ? p : n, 0)

const getArrayofLink = (parcours = []) => {
  let newArray = []
  parcours.map(parcour => {
    newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos)
  });
  const arr = [...newArray].sort(fieldSorter(['-chapitre', 'ordre']));

  return arr;
}

const initSlideIndex = (array, index, uri) => {
  if (index === "conclusion") {
    return array.length + 3;
  } else if (index === "introduction") {
    return 1;
  } else if (index === "quizz") {
    return 2;
  } else {
    let index;
    array.map((item, key) => {

      if (item.chapitre.toLowerCase() === uri.chapitre &&
        item.ordre === uri.order
      ) {
        index = key + 3;
      }
    });
    return index;
  }
}

const renderHeaderWithParcours = ({ slug, index, router }, data, width) => {
  const slide = getArrayofLink(data.parcours);
  const arr = Array.from(slide);
  const current_slide = initSlideIndex(arr, index, router.query);

  let nb_slide = 0
  if (data.parcours) {
    data.parcours.map((parcour, key) => {
      nb_slide = parcour.textes.length + parcour.videos.length + parcour.quotes.length;
      nb_slide += 3;
    })
  }

  return width < 992
    ? <MenuHeader
        openMenu={handleClickOpen}
        closeMenu={handleClickClose}
        indicator={
          <div className="menu__slides-progress">
            <div className="menu__progress-container" onClick={openMenuIntra}>
              <span className="menu__progress-indicator"> {current_slide} | {nb_slide} </span>
            </div>
          </div>
        }
        parcours={
          <div className="menu_sidebarleft_menu-container">
            <ListMenu slug={slug} data={data} nb={nb_slide} handleCloseMenuIntro={closeMenuIntra}></ListMenu>
          </div>
        }
      />
    : <DesktopMenu />;
};

const renderHeaderWithoutParcours = (width) => {
  return width < 992
    ? <MenuHeader
        openMenu={handleClickOpen}
        closeMenu={handleClickClose}
      />
    : <DesktopMenu />;
}

const Menu = ({ slug, index, router }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener('resize', () => setWidth(window.innerWidth));
    }
  }, []);

  let header;
  if (slug) {
    const { loading, data } = useQuery(GET_MENU_INFO, {
      variables: { slug }
    });

    if (loading) {
      return <div></div>;
    }

    header = renderHeaderWithParcours({ slug, index, router }, data, width);
  } else {
    header = renderHeaderWithoutParcours(width);
  }
  
  return <div>{header}</div>;
}

export default withRouter(Menu)