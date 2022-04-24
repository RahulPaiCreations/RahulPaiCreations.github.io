import PropTypes from "prop-types";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  DotGroup,
  ImageWithZoom,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { Component } from "react";

export default class Carousel extends Component {
  static propTypes = {
    folder: PropTypes.string.isRequired,
    captions: PropTypes.arrayOf(PropTypes.string).isRequired,
    aspectRatio: PropTypes.arrayOf(PropTypes.number),
  };

  static defaultProps = {
    aspectRatio: [16, 9],
  };

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={this.props.aspectRatio[0]}
        naturalSlideHeight={this.props.aspectRatio[1]}
        totalSlides={this.props.captions.length}
        infinite={this.props.captions.length > 1}
        // isIntrinsicHeight
        touchEnabled={this.props.captions.length > 1}
        dragEnabled={this.props.captions.length > 1}
      >
        <div style={{ position: "relative" }}>
          <Slider style={{ borderRadius: "3vmin" }}>
            {this.props.captions.map(
              (caption, ind) => (
                <Slide index={ind}>
                  <ImageWithZoom src={`${this.props.folder}/${ind + 1}.png`} />
                  {caption != null && caption.trim().length > 0 && (
                    <div className="caption">{caption}</div>
                  )}
                </Slide>
              ),
              this,
            )}
          </Slider>
          {this.props.captions.length > 1 && (
            <ButtonBack className="buttonBack buttonCarousel">
              <img src="../../assets/arrow_left.svg" alt="left" />
            </ButtonBack>
          )}
          {this.props.captions.length > 1 && (
            <ButtonNext className="buttonNext buttonCarousel">
              <img src="../../assets/arrow_right.svg" alt="right" />
            </ButtonNext>
          )}
        </div>
        {this.props.captions.length > 1 && <DotGroup className="dotGroup" />}
      </CarouselProvider>
    );
  }
}
