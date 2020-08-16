import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TitleDate extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    alias: PropTypes.string,
  };

  render() {
    return (
      <div className="titleDate">
        <h1 className="title" style={{ display: "inline" }}>
          {this.props.title}
          {this.props.alias != null && this.props.alias.trim().length > 0 && (
            <code> "{this.props.alias}"</code>
          )}
        </h1>
        <span className="date">{this.props.date}</span>
      </div>
    );
  }
}
