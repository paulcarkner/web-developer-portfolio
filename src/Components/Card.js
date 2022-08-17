import Style from "./Card.module.css";
import React from "react";

export default class Card extends React.Component {
  render() {
    return (
      <div className={Style.card}>
        <img src={this.props.imgSrc} alt={this.props.title} />
        <div className={Style.cardBody}>
          <div className={Style.cardTitle}>{this.props.title}</div>
          <div className={Style.cardDescription}>{this.props.children}</div>
          <div className={Style.cardTags}>{this.props.tags}</div>
          <div className={Style.cardLinks}>
            <a className={Style.cardButton} href={this.props.previewUrl}>
              <span className="material-symbols-outlined">open_in_new</span>
              Preview
            </a>
            <a className={Style.cardButton} href={this.props.codeUrl}>
              <span className="material-symbols-outlined">code</span>Code
            </a>
          </div>
        </div>
      </div>
    );
  }
}
