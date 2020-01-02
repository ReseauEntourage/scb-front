import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { TimelineLite } from 'gsap';

import ListMenu from './ListMenu';

import { Query } from 'react-apollo';
import { GET_MENU_INFO } from '../../graphql/querries';

import menu from '../../static/images/ios-menu.svg';
import scb from '../../static/images/scb.png';
import close from '../../static/images/close.svg';
import arrow from '../../static/images/arrow.svg';
import arrow_white from '../../static/images/arrow-white.svg';

import DesktopMenu from './DesktopMenu';

import './Menu.scss';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.nb_slide = 0;
    this.current_slide;
    this.state = {
      newMap: new Map(),
      width: 0,
      height: 0,
    };
    this.slide;
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  fieldSorter = (fields) => (a, b) => fields.map(o => {
    let dir = 1;
    if (o[0] === '-') { dir = -1; o = o.substring(1); }
    return a[o] > b[o] ? dir : a[o] < b[o] ? -(dir) : 0;
  }).reduce((p, n) => p ? p : n, 0)

  getArrayofLink = (parcours = []) => {
    let newArray = []
    parcours.map(parcour => {
      newArray = parcour.textes.concat(parcour.quotes).concat(parcour.videos)
    });
    const arr = [...newArray].sort(this.fieldSorter(['-chapitre', 'ordre']));

    return arr;
  }

  handleClickClose() {
    const container = document.querySelector('.menu__sidebar-container--sidebar');
    const background = document.querySelector('.menu__sidebar-container--background');
    const sidebar = document.querySelector('.menu__sidebar-container');

    const tl = new TimelineLite();

    tl
      .to(background, .3, { autoAlpha: 0, ease: Power0.easeInOut })
      .to(container, .3, { x: '0vw', ease: Power0.easeInOut }, '-= .2')
      .to(sidebar, .1, { autoAlpha: 1 })
      .to(background, .01, { x: '0vw', ease: Power0.easeInOut }, '+=.1');
  }

  handleClickOpen() {
    const container = document.querySelector('.menu__sidebar-container--sidebar');
    const background = document.querySelector('.menu__sidebar-container--background');
    const sidebar = document.querySelector('.menu__sidebar-container');

    const tl = new TimelineLite();
    tl
      .to(sidebar, .1, { autoAlpha: 1 })
      .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
      .to(container, .3, { x: '100vw', ease: Power0.easeInOut })
      .to(background, .3, { autoAlpha: 1, ease: Power0.easeInOut }, '-= .3');
  }

  openMenuIntra() {
    const container = document.querySelector('.menu_sidebarleft_menu-container');
    const background = document.querySelector('.menu__sidebar-container--background');
    const sidebar = document.querySelector('.menu__sidebar-container');

    const tl = new TimelineLite();
    tl
      .to(sidebar, .1, { autoAlpha: 1 })
      .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
      .to(container, .3, { x: '-80vw', ease: Power0.easeInOut })
      .to(background, .3, { autoAlpha: 1, ease: Power0.easeInOut }, '-= .3');
  }

  closeMenuIntra() {
    const container = document.querySelector('.menu_sidebarleft_menu-container');
    const background = document.querySelector('.menu__sidebar-container--background');
    const sidebar = document.querySelector('.menu__sidebar-container');

    const tl = new TimelineLite();
    tl
      .to(sidebar, .1, { autoAlpha: 1 })
      .to(background, .01, { x: '100vw', ease: Power0.easeInOut })
      .to(container, .3, { x: '0vw', ease: Power0.easeInOut })
      .to(background, .3, { autoAlpha: 0, ease: Power0.easeInOut }, '-= .3');
  }

  initSlideIndex = (array, index, uri) => {
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

  renderMenu() {
    return (
      <div className="menu__sidebar-container--sidebar">
        <div className="menu__sidebar__top-container">
          <div className="menu__sidebar__logo-container">
            <a href='/'>
              <img src={scb} alt="" className="menu__sidebar-logo" />
            </a>
          </div>
          <div className="menu__sidebar-close-container" onClick={this.handleClickClose}>
            <img src={close} alt="" className="menu__sidebar-close" />
          </div>
        </div>

        <div className="menu__sidebar__list-container">
          <ul className="menu__sidebar__list-container--ul">
            <li className="menu__sidebar__list-item">
              <a href="/parcours">
                <span className="item-title">Les parcours</span>
                <img src={arrow} alt="arrow" className="arrow" />
              </a>
            </li>
            <li className="menu__sidebar__list-item">
              <a href="/defis">
                <span className="item-title">Les défis</span>
                <img src={arrow} alt="arrow" className="arrow" />
              </a>
            </li>
            <li className="menu__sidebar__list-item">
              <a href="/a-propos">
                <span className="item-title">A propos</span>
                <img src={arrow} alt="arrow" className="arrow" />
              </a>
            </li>
          </ul>
        </div>

        <a href='https://www.entourage.social/' target="_blank">
          <div className="menu__sidebar__entourage-container">
            <span className="entourage-title">Agir avec entourage</span>
            <img src={arrow_white} alt="arrow" className="arrow" />
          </div>
        </a>
      </div>
    );
  }

  render() {
    const { slug, index, router } = this.props;
    return (
      <div>
        {
          slug !== null
            ?
            <Query query={GET_MENU_INFO} variables={{ slug }}>
              {({ loading, error, data }) => {
                this.slide = this.getArrayofLink(data.parcours);
                const arr = Array.from(this.slide);
                this.current_slide = this.initSlideIndex(arr, index, router.query);

                if (data.parcours) {
                  data.parcours.map((parcour, key) => {
                    this.nb_slide = parcour.textes.length + parcour.videos.length + parcour.quotes.length;
                    this.nb_slide += 3;
                  })
                } else {
                  this.nb_slide = 0;
                }

                return (
                  this.state.width < 992
                    ?
                    <div>
                      <div className="menu-container-mobile">
                        <div className="menu-mobile__burger-icon" onClick={this.handleClickOpen} >
                          <img src={menu} alt="menu icon" />
                        </div>
                        <div className="menu__scb-logo">
                          <a href='/'>
                            <img src={scb} alt="scb logo" />
                          </a>
                        </div>
                        <div className="menu__slides-progress">
                          <div className="menu__progress-container" onClick={this.openMenuIntra}>
                            <span className="menu__progress-indicator"> {this.current_slide} | {this.nb_slide} </span>
                          </div>
                        </div>
                        <div className="menu__sidebar-container">
                          {this.renderMenu()}

                          <div className="menu_sidebarleft_menu-container">
                            <ListMenu slug={slug} data={data} nb={this.nb_slide} handleCloseMenuIntro={() => { this.closeMenuIntra() }}></ListMenu>
                          </div>
                          <div className="menu__sidebar-container--background"></div>
                        </div>
                      </div>
                    </div>
                    :
                    <DesktopMenu />
                )
              }}
            </Query>
            : (this.state.width < 992
              ?
              <div className="menu-container-mobile center">
                <div className="menu__burger-icon" onClick={this.handleClickOpen} >
                  <img src={menu} alt="menu icon" />
                </div>
                <div className="menu__scb-logo center">
                  <a href="/">
                    <img src={scb} alt="scb logo" />
                  </a>
                </div>
                <div className="menu__sidebar-container">
                  {this.renderMenu()}

                  <div className="menu__sidebar-container--background"></div>
                </div>
              </div>
              :
              <DesktopMenu />
            )
        }
      </div>
    )
  }
}

export default withRouter(Menu)