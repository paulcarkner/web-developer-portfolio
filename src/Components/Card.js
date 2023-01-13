import React from "react";
import Style from "./Card.module.css";

export default class Card extends React.Component {
  render() {
    return (
      <div className={Style.card}>
        <img src={this.props.imgSrc} alt={this.props.title} />
        <div className={Style.cardBody}>
          <div className={Style.cardTitle}>{this.props.title}</div>
          <div className={Style.cardTags}>{this.props.tags}</div>
          <div className={Style.cardDescription}>{this.props.children}</div>
          <div className={Style.cardLinks}>
            {this.props.previewUrl !== "" ? <a className={Style.cardButton} href={this.props.previewUrl} target="_blank" rel="noreferrer">
              <span className="material-symbols-outlined">open_in_new</span>
              Preview
            </a> : null}
            {this.props.codeUrl !== "" ? <a className={Style.cardButton} href={this.props.codeUrl}>
              <span className="material-symbols-outlined">code</span>Code
            </a> : null}
          </div>
        </div>
      </div>
    );
  }
}
