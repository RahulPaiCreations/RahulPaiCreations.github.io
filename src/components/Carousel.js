import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  ImageWithZoom,
  DotGroup,
} from "pure-react-carousel";

export default class Carousel extends Component {
  static propTypes = {
    folder: PropTypes.string.isRequired,
    captions: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={60} //TODO: adaptive aspect ratio
        totalSlides={this.props.captions.length}
        infinite
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
              this
            )}
          </Slider>
          {this.props.captions.length > 1 && (
            <ButtonBack className="buttonBack buttonCarousel">
              <img src="../../assets/arrow_left.svg" />
            </ButtonBack>
          )}
          {this.props.captions.length > 1 && (
            <ButtonNext className="buttonNext buttonCarousel">
              <img src="../../assets/arrow_right.svg" />
            </ButtonNext>
          )}
        </div>
        {this.props.captions.length > 1 && <DotGroup className="dotGroup" />}
      </CarouselProvider>
    );
  }
}
