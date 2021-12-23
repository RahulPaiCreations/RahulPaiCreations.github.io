import PropTypes from "prop-types";
import React, { Component } from "react";

export default class TitleDate extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    alias: PropTypes.string,
  };

  render() {
    return (
      <div className="titleDate">
        <h1 className="title titleLarge" style={{ display: "inline" }}>
          {this.props.title}
        </h1>
        {this.props.alias != null && this.props.alias.trim().length > 0 && (
          <div className="alias">"{this.props.alias}"</div>
        )}
        <div className="date">{this.props.date}</div>
      </div>
    );
  }
}
