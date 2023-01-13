import React from "react";
import Style from "./SkillsBars.module.css";

export default class SkillsBars extends React.Component {
  render() {
    return (
      <div className={Style.SkillsBars}>
        <div className={Style.SkillName}>{this.props.name}</div>
        <div className={Style.SkillValue}>{this.props.value}</div>
        {new Array(5).fill("").map((x, index) => (
          <Bar key={index} on={index < this.props.barCount} />
        ))}
      </div>
    );
  }
}

class Bar extends React.Component {
  render() {
    return (
      <div className={`${Style.Bar} ${this.props.on ? Style.on : null}`}></div>
    );
  }
}
