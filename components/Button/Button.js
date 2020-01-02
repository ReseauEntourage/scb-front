import React, { Component } from "react";
// import Link from 'next/link';

import "./Button.scss";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.nextChapitre = "";
    this.change = false;
    this.chapitres = ["comprendre", "changer", "agir"];
  }

  defineChapitre = chapitre => {
    switch (chapitre) {
      case "comprendre":
        this.nextChapitre = "changer";
        break;
      case "changer":
        this.nextChapitre = "agir";
        break;
      case "agir":
        this.nextChapitre = "conclusion";
        break;
      default:
        this.nextChapitre = chapitre;
        break;
    }
  };

  render() {
    const {
      title,
      color,
      slug,
      order,
      param,
      chapitre,
      next
    } = this.props;

    let nextLink = parseInt(order) + 1;
    if (next) {
      this.change = true;
      this.defineChapitre(chapitre);
    } else {
      this.nextChapitre = chapitre;
    }

    let href = '';
    if (this.nextChapitre) {
      href = `/parcours/${slug}/conclusion`;
    } else if (!this.change) {
      href = `/parcours/${slug}/${this.nextChapitre}/${nextLink}`;
    } else {
      href = `/parcours/${slug}/${this.nextChapitre}/0`;
    }

    return (
      <div className="btn-container">
        <a href={href}>
          <div className={`button-container ${param === "quote" ? "quote" : ""}`} style={{ background: `#${color}` }}>
            <span className="button-title">{title}</span>
          </div>
        </a>
      </div>
    );
  }
}
